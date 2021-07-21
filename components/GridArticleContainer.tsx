import * as React from "react";
import { Container, Box } from "@chakra-ui/react";

const GridArticleContainer = ({
  as = "section",
  children,
  aside,
  width = "720px",
  ...props
}: Props) => {
  // const asideWidth = `${width} * 0.7`;

  return (
    <Container
      as={as}
      px="w5"
      maxW={{ base: "100%", xl: `calc(${width} * 2)` }}
      pos="relative"
      sx={{ marginInlineStart: "auto !important" }}
      {...props}
    >
      <Box w={width} maxW={width} sx={{ ml: `calc((100% - ${width}) / 2)` }}>
        {children}
      </Box>
      <Box
        pos={{ xl: "absolute" }}
        right={0}
        top={0}
        pt={1}
        sx={{ w: `calc(${width} * 0.4)` }}
      >
        {aside}
      </Box>
    </Container>
  );
};

// see the BlockLearnMoreActions comp
type As = "section" | "article" | "div";

interface Props {
  // maxW?: string | string[] | Record<string, unknown>;
  as?: As;
  aside?: React.ReactNode;
  children: React.ReactNode;
  width?: string;
  // boxProps?: any;
  [x: string]: any;
}

export default GridArticleContainer;
