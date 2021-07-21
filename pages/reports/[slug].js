/* eslint-disable react/prop-types */
import * as React from "react";
// import PropTypes from "prop-types";
// import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import {
  Box,
  VStack,
  HStack,
  StackDivider,
  Container,
  Text,
} from "@chakra-ui/react";
import LayoutBase from "@/components/LayoutBase";
import GridArticleContainer from "@/components/GridArticleContainer";
import ReactMarkdown from "react-markdown";
import ReportAside from "@/components/Report/Aside";
import ReportHgroupTitle from "@/components/Report/HgroupTitle";
import ReportHgroupMeta from "@/components/Report/HgroupMeta"; // import ReportText from "@/components/Report/Text";
// import ReportAsideFootnote from "@/components/Report/AsideFootnote";
// import { PostBody } from "@/components/PostBody";
// import ReportContent from "@/components/ReportContent";
// import MediaImage from "@/components/MediaImage";
// import { getAllReportsBySlug, getPostAndMorePosts } from "@/lib/api";
// import { getReportBySlug, getAllReportsWithSlug } from "@/lib/pages/Reports";
// import MdxWrapper from "@/components/MdxWrapper";
// import MdxComponents from "@/components/MdxComponents";
// import renderToString from "next-mdx-remote/render-to-string";
import { getReportQuery } from "@/lib/pages/Reports";
import { request } from "@/lib/datocms";
import * as helpers from "@/lib/report-helpers";

// When you use getStaticProps on a page with dynamic route parameters,
// you must also use getStaticPaths.
// export const getStaticPaths: GetStaticPaths = async () => {
export async function getStaticPaths() {
  const data = await request({ query: `{ allReports { slug } }` });

  return {
    paths: data.allReports.map((post) => `/reports/${post.slug}`) || [],
    fallback: false,
  };
}

// export const getStaticProps: GetStaticProps = async (context) => {
export async function getStaticProps({ params, preview = false }) {
  // or const data = await getReportBySlug(params.slug, preview);
  // or useQuerySubscription from Dato's nextjs-demo
  const data = await request({
    query: getReportQuery,
    variables: { slug: params.slug },
    preview,
  });

  return {
    props: {
      preview,
      post: {
        ...data?.report,
      },
      // morePosts: data?.morePosts ?? [],
    },
  };
}

export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <LayoutBase preview={preview}>
      <Head>{post && renderMetaTags(post.seo)}</Head>

      <VStack w="full" align="flex-start" spacing="w3">
        {/* TODO: loading  */}
        {/* {router.isFallback ? () : ()} */}

        {/* HERO */}
        {/* yellow "#ffdd08c2" blue #bcd7dbc2> */}
        <Box w="full" as="header" bg="transparent" mb="w6">
          <GridArticleContainer py="w8" as="div">
            <VStack align="flex-start" spacing="w2" pos="relative" pr="w5">
              <ReportHgroupTitle
                title={post.title}
                lede={post.heroLede}
              ></ReportHgroupTitle>
              <ReportHgroupMeta
                date={post.datePublished}
                authors="Kasey Klime and Oshan Jarrow"
              ></ReportHgroupMeta>
            </VStack>
          </GridArticleContainer>
        </Box>

        {/* Dato Structured Text test. Upgrade the package first: https://github.com/datocms/nextjs-demo/issues/11 */}
        {/* <PostBody content={post.stContent} /> */}
        {/* <ReportContent content={post.stContent} /> */}

        <VStack w="full" align="flex-start" spacing="w6">
          {post.content?.map((item) => {
            // const mdxSource = await renderToString(item.text, { components: MdxComponents });

            return (
              <GridArticleContainer
                key={item.id}
                aside={
                  <ReportAside
                    footnote={item.footnote}
                    footnoteImage={item.footnoteImage}
                    insights={item.insights}
                  />
                }
              >
                <Text as="div" pr={{ xl: "w4" }}>
                  <ReactMarkdown
                    key={item.id}
                    allowDangerousHtml
                    className="md-prose"
                    linkTarget="_blank"
                  >
                    {item.text}
                  </ReactMarkdown>
                </Text>
                {/* <ReportText
                  key={item.id}
                  source={item.text}
                  pr={{ xl: "w4" }}
                /> */}
              </GridArticleContainer>
            );
          })}
        </VStack>

        <GridArticleContainer>
          <Container py="w9">
            {/* {morePosts.length > 0 && <Text>there are more posts…</Text>} */}
          </Container>
        </GridArticleContainer>
      </VStack>
    </LayoutBase>
  );
}
