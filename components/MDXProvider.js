import { MDXProvider } from "@mdx-js/react";
import { Text, Box, Link } from "@chakra-ui/react";

export default function MDXCompProvider(props) {
  const state = {
    a: (props) => (
      <Link as="a" color="pewter.500" fontWeight="bold" {...props} />
    ),
    h1: (props) => (
      <Text
        as="h1"
        textStyle="text3xl"
        textTransform="uppercase"
        mb={3}
        {...props}
      />
    ),
    h2: (props) => (
      <Text
        as="h2"
        textStyle="textSmMeta"
        textTransform="uppercase"
        mt={8}
        mb={3}
        {...props}
      />
    ),
    h3: (props) => (
      <Text
        as="h3"
        textStyle="textLg"
        fontWeight="bold"
        fontFamily="sans"
        mt={8}
        mb={3}
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
        mt={3}
        _notLast={{ mb: 3 }}
        pl={8}
        {...props}
      />
    ),
    ol: (props) => (
      <Text
        as="ol"
        textStyle="article"
        mt={3}
        _notLast={{ mb: 3 }}
        pl={8}
        {...props}
      />
    ),
    li: (props) => (
      <Text as="li" textStyle="article" _notLast={{ mb: 3 }} {...props} />
    ),
  };

  return (
    <MDXProvider components={state}>
      <Box {...props} />
    </MDXProvider>
  );
}
