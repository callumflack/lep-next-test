/* eslint-disable */
import React from "react";
import { Text, Box } from "@chakra-ui/react";
import GridArticle from "@/components/GridArticle";
import MyBackground from "@/components/MyBackground";
import MyButton from "@/components/MyButton";
import ReportAside from "@/components/Report/Aside";

const mdxComponents = {
  GridArticle: (props) => <GridArticle {...props} />,
  ReportAside: (props) => <ReportAside {...props} />,
  MyBackground: (props) => <MyBackground {...props} />,
  MyButton: (props) => <MyButton {...props} />,
  h1: (props) => (
    <Text
      as="h1"
      textStyle="text3xl"
      textTransform="uppercase"
      _notLast={{ mb: 3 }}
      {...props}
    />
  ),
  h2: (props) => (
    <Text
      as="h2"
      textStyle="textSmMeta"
      textTransform="uppercase"
      _notFirst={{ mt: 8 }}
      _notLast={{ mb: 3 }}
      {...props}
    />
  ),
  h3: (props) => (
    <Text
      as="h3"
      textStyle="textMd"
      fontWeight="semibold"
      fontFamily="sans"
      _notFirst={{ mt: 8 }}
      _notLast={{ mb: 3 }}
      {...props}
    />
  ),
  p: (props) => (
    <Text as="p" textStyle="article" _notLast={{ mb: 3 }} {...props} />
  ),
  ul: (props) => (
    <Text
      as="ul"
      textStyle="article"
      _notFirst={{ mt: 3 }}
      _notLast={{ mb: 3 }}
      pl={8}
      {...props}
    />
  ),
  ol: (props) => (
    <Text
      as="ol"
      textStyle="article"
      _notFirst={{ mt: 3 }}
      _notLast={{ mb: 3 }}
      pl={8}
      {...props}
    />
  ),
  // li: (props) => (
  //   <Text as="li" textStyle="textBody" _notLast={{ mb: 3 }} {...props} />
  // ),
};

// import { MDXProvider } from "@mdx-js/react";
// export default function MDXStyledProvider({ children }) {
//   return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
// }

export default mdxComponents;
