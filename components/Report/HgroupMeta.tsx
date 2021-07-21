import { Box, HStack, StackDivider, Text } from "@chakra-ui/react";
import * as helpers from "@/lib/report-helpers";

interface HgroupMetaProps {
  date?: string;
  authors: string;
}

export default function ReportHgroupMeta({ date, authors }: HgroupMetaProps) {
  return (
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
          Published {helpers.getDateStr(date)}
        </Text>
        <Text textStyle="TextBody" fontFamily="sans" fontWeight="400">
          Written by {authors}
        </Text>
      </HStack>
    </Box>
  );
}
