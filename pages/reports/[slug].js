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
import GridArticle from "@/components/GridArticle";
import ReactMarkdown from "react-markdown";
import ReportAside from "@/components/Report/Aside";
// import ReportAsideFootnote from "@/components/Report/AsideFootnote";
// import { PostBody } from "@/components/PostBody";
// import ReportContent from "@/components/ReportContent";
// import MediaImage from "@/components/MediaImage";
// import { getAllReportsBySlug, getPostAndMorePosts } from "@/lib/api";
// import { getReportBySlug, getAllReportsWithSlug } from "@/lib/pages/Reports";
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

      <VStack align="flex-start" spacing="w3" pt="w5">
        {/* TODO: loading  */}
        {/* {router.isFallback ? () : ()} */}

        <GridArticle>
          <VStack align="flex-start" spacing="w2" pos="relative" pr="w5">
            <Box>
              <Text
                textStyle="textBody"
                fontFamily="sans"
                fontWeight="600"
                textTransform="uppercase"
                letterSpacing="0.0666em"
                mb="6px"
              >
                Reports
              </Text>
              <Text
                as="h1"
                textStyle="text6xl"
                fontFamily="title"
                pos="relative"
                transform="translateX(-0.075em)"
              >
                {post.title}
              </Text>
            </Box>
            <Text
              as="h2"
              textStyle="textLg"
              fontFamily="sans"
              fontWeight="400"
              letterSpacing="0.0em"
              color="pewter.700"
            >
              {post.heroLede}
            </Text>

            <Box
              w="full"
              borderTop="1px solid"
              borderBottom="1px solid"
              borderColor="pewter.300"
              pb="3px"
            >
              <HStack
                py="w1"
                color="pewter.600"
                spacing={3}
                divider={<StackDivider borderColor="pewter.300" />}
              >
                <Text textStyle="TextBody" fontFamily="sans" fontWeight="400">
                  Published {helpers.getDateStr(post.datePublished)}
                </Text>
                <Text textStyle="TextBody" fontFamily="sans" fontWeight="400">
                  Written by O-K
                </Text>
              </HStack>
            </Box>
          </VStack>
          {/* <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          />
        <PostBody content={post.content} /> */}
        </GridArticle>

        {/* Dato Structured Text test. Upgrade the package first: https://github.com/datocms/nextjs-demo/issues/11 */}
        {/* <PostBody content={post.stContent} /> */}
        {/* <ReportContent content={post.stContent} /> */}

        <VStack align="flex-start" spacing="w6">
          {post.content?.map((item) => (
            <GridArticle
              key={item.id}
              aside={
                <ReportAside
                  footnote={item.footnote}
                  footnoteImage={item.footnoteImage}
                  insights={item.insights}
                />
              }
            >
              <Text as="div" pr="w5">
                <ReactMarkdown
                  key={item.id}
                  allowDangerousHtml
                  className="md-prose"
                  linkTarget="_blank"
                >
                  {item.text}
                </ReactMarkdown>
              </Text>
            </GridArticle>
          ))}
        </VStack>

        <GridArticle>
          <Container layerStyle="spaceXlY">
            {/* {morePosts.length > 0 && <Text>there are more posts…</Text>} */}
          </Container>
        </GridArticle>
      </VStack>
    </LayoutBase>
  );
}
