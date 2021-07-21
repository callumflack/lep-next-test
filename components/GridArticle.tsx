import * as React from "react";
import { Grid, Box } from "@chakra-ui/react";

const GridArticle = ({ as = "section", children, aside, ...props }: Props) => (
  <Grid
    as={as}
    w="full"
    px="w5"
    gap={{ base: 4, "2xl": 5 }}
    templateColumns={{
      base: "repeat(1, minmax(0, 1fr))",
      lg: "repeat(12, minmax(0, 1fr))",
    }}
    {...props}
  >
    <Box gridColumn={{ base: "1/-1", lg: "4/10", "3xl": "4/8" }} pr="w6">
      {children}
    </Box>
    <Box gridColumn={{ base: "1/-1", lg: "10/12", "3xl": "9/11" }} pt={1}>
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
