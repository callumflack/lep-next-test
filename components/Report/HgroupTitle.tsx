import { Box, Text } from "@chakra-ui/react";

interface HgroupTitleProps {
  title?: string;
  lede?: string;
  color?: string;
}

export default function ReportHgroupMeta({
  title,
  lede,
  color = "#1184b6",
}: HgroupTitleProps) {
  return (
    <>
      <Box>
        <Text
          textStyle="textBody"
          fontFamily="sans"
          fontWeight="700"
          textTransform="uppercase"
          letterSpacing="0.0666em"
          color={color}
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
          color={color}
        >
          {title}
        </Text>
      </Box>
      {/* color="pewter.700" */}
      <Text
        as="h2"
        textStyle="text2xl"
        fontFamily="serif"
        fontWeight="400"
        lineHeight="1.3"
        letterSpacing="-0.005em"
        color={color}
      >
        {lede}
      </Text>
    </>
  );
}
