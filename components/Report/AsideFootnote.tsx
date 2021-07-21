import { Text } from "@chakra-ui/react";
// import ReactMarkdown from "react-markdown";

export default function AsideFootnote({ data }: AsideFootnoteProps) {
  return (
    <Text as="div" textStyle="aside" color="#999">
      {/* <ReactMarkdown>{data}</ReactMarkdown> */}
      {data}
    </Text>
  );
}

export interface AsideFootnoteProps {
  data: string;
}
