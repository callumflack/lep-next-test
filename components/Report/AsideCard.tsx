import Link from "next/link";
import { Box, VStack, HStack, StackDivider, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

export default function AsideCard({ item }: AsideCardProps) {
  const Tag = ({ children }) => (
    <Text
      textStyle="textSmMeta"
      color="#999"
      border="1px solid"
      rounded="md"
      px={2}
      py="2px"
      pb="3px"
      cursor="pointer"
    >
      {children}
    </Text>
  );

  return (
    // <Box opacity={0} _hover={{ opacity: 1 }}>
    <VStack align="flex-start" space="w4">
      <Box>
        <Text as="div" textStyle="textBody" fontWeight="600" pb={1}>
          <ReactMarkdown>{item.title}</ReactMarkdown>
        </Text>
        <Text as="div" textStyle="aside" color="#999">
          <ReactMarkdown>{item.lede}</ReactMarkdown>
        </Text>
      </Box>
      <Box
        w="full"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="pewter.300"
        pb="3px"
      >
        {item.tags && (
          <HStack py="2px" color="pewter.600" spacing={2}>
            {item.tags?.map((tag, index) => (
              <p key={index}>{tag.name}</p>
            ))}
          </HStack>
        )}
      </Box>
      <Box pt={1}>
        <Link href={item.slug}>
          <Tag>Learn more</Tag>
        </Link>
      </Box>
    </VStack>
  );
}

export interface AsideCardProps {
  item: Array<{
    id: string;
    title: string;
    lede: string;
    slug: string;
    sources?: Array<{
      slug: string;
      title: string;
    }>;
    tags?: Array<{
      slug: string;
      name: string;
    }>;
  }>;
}
