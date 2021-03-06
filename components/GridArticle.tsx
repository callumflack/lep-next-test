import * as React from "react";
import { Grid, Box } from "@chakra-ui/react";

const GridArticle = ({ as = "section", children, aside, ...props }: Props) => (
  <Grid
    as={as}
    w="full"
    gap={{ base: 10, "2xl": 20 }}
    templateColumns={{
      base: "repeat(1, minmax(0, 1fr))",
      lg: "repeat(12, minmax(0, 1fr))",
    }}
    {...props}
  >
    <Box gridColumn={{ base: "1/-1", lg: "3/9", "2xl": "3/9" }}>{children}</Box>
    <Box gridColumn={{ base: "1/-1", lg: "9/12", "2xl": "9/12" }} pt={1}>
      {aside}
    </Box>
  </Grid>
);

// see the BlockLearnMoreActions comp
type As = "section" | "article" | "div";

interface Props {
  // maxW?: string | string[] | Record<string, unknown>;
  as?: As;
  aside?: React.ReactNode;
  children: React.ReactNode;
  // boxProps?: any;
  [x: string]: any;
}

export default GridArticle;
