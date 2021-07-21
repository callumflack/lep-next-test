// import { Container, Box, Text } from "@chakra-ui/react";
import MdxWrapper from "@/components/MdxWrapper";
import MdxComponents from "@/components/MdxComponents";
import renderToString from "next-mdx-remote/render-to-string";

// FAILS:
// Attempted import error: '@/components/Report/Text' does not contain a default export

export async function ReportText({ source, ...props }: Props) {
  const mdxSource = await renderToString(source, {
    components: MdxComponents,
  });
  return <MdxWrapper source={mdxSource} {...props} />;
}

interface Props {
  // maxW?: string | string[] | Record<string, unknown>;
  source?: string;
  [x: string]: any;
}
