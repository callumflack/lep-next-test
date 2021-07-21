import Head from "next/head";
import {
  Text,
  Box,
  VStack,
  HStack,
  StackDivider,
  Container,
} from "@chakra-ui/react";
import LayoutBase from "@/components/LayoutBase";
import GridArticle from "@/components/GridArticle";
import ReportHgroupTitle from "@/components/Report/HgroupTitle";
import ReportHgroupMeta from "@/components/Report/HgroupMeta";

// DATO
import { renderMetaTags } from "react-datocms";
import { request } from "@/lib/datocms";
import { getReportQuery } from "@/lib/pages/Reports";

// LOCAL MDX
// import MDXProvider from "@/components/MDXProvider";
// import AllComponents from "@/components/AllComponents";
import MdxComponents from "@/components/MdxComponents";
import { getAllPostSlugs, getPostdata } from "@/lib/posts";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";

// const components = AllComponents;

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  // LOCAL
  const postContent = await getPostdata(params.slug);
  const { data, content } = matter(postContent);
  const mdxSource = await renderToString(content, {
    MdxComponents,
    scope: data,
  });
  // DATO
  // or const data = await getReportBySlug(params.slug, preview);
  // or useQuerySubscription from Dato's nextjs-demo
  const dato = await request({
    query: getReportQuery,
    variables: { slug: params.slug },
    preview,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      preview,
      post: {
        ...dato?.report,
      },
    },
  };
}

// export default function MdxWrapper({ source, ...props }) {
//   const content = hydrate(source, { components: MdxComponents });
//   return (
//     <Box className="md-prose" {...props}>
//       {content}
//     </Box>
//   );
// }

export default function Posts({ post, source, frontMatter, preview }) {
  const content = hydrate(source, { components: MdxComponents });

  return (
    <LayoutBase preview={preview}>
      <Head>
        <title>{frontMatter.title}</title>
        {post && renderMetaTags(post.seo)}
      </Head>

      <VStack align="flex-start" spacing="0">
        {/* TODO: loading */}
        {/* {router.isFallback ? () : ()} */}

        {/* HERO */}
        <GridArticle py="w5">
          <VStack align="flex-start" spacing="w2" pos="relative" pr="w5">
            <ReportHgroupTitle
              title={frontMatter.title}
              lede={frontMatter.excerpt}
            ></ReportHgroupTitle>
            <ReportHgroupMeta
              date={frontMatter.date}
              authors={frontMatter.author}
            ></ReportHgroupMeta>
          </VStack>
        </GridArticle>

        {/* CONTENT */}
        <VStack align="flex-start" spacing="w6">
          {/* <MDXProvider>{content}</MDXProvider> */}
          {/* <Box className="md-prose-2">{content}</Box> */}
          {content}
        </VStack>

        {/* ENDERS */}
        <GridArticle py="w9">
          {/* {morePosts.length > 0 && <Text>there are more posts…</Text>} */}
        </GridArticle>
      </VStack>
    </LayoutBase>
  );
}
