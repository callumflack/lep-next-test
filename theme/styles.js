// @refresh reset

// import { theme, extendTheme, mode } from "@chakra-ui/react";
// import { merge } from "@chakra-ui/utils";
// import { extendTheme } from "@chakra-ui/react";
// import { mode } from "@chakra-ui/theme-tools";
// https://github.com/chakra-ui/chakra-ui/tree/develop/packages/theme/src

// const styles = merge(theme, {
const styles = {
  global: {
    body: {
      fontFamily: "sans",
      bg: "white",
      color: "black",
      fontSize: "16px",
      lineHeight: "base",
      // transition: "background-color 0.2s",
    },
    "a:not(button)": {
      textDecoration: "none",
      _hover: {
        textDecoration: "underline",
      },
    },
    // "*::placeholder": {
    //   color: "gray.400",
    // },
    // "*, *::before, &::after": {
    // borderColor: "gray.200",
    // wordWrap: "break-word",
    // },
    // should work for any selector on a page but DOES NOT
    // https://github.com/chakra-ui/chakra-ui/issues/1561#issuecomment-671029136
    // "#__next": {
    //   backgroundColor: "pink",
    //   height: "100%",
    //   width: "100%",
    // },
    ".headroom--pinned": {
      backgroundColor: "white",
    },
    // active scrolledTo class in NavAside
    ".active": {
      fontWeight: "bold",
    },

    /* React-markdown & MDX duplicates */
    ".md-prose": {
      a: {
        textDecoration: "underline",
      },
      "p, ul": {
        fontFamily: "serif",
        fontSize: { base: "16px", lg: "18px", xl: "20px" },
        fontWeight: "400",
        letterSpacing: "0",
      },
      "ul, ol": {
        pl: 5,
      },
      h1: {
        fontSize: ["36px"],
      },
      h2: {
        fontFamily: "sans",
        fontSize: { base: "21px", lg: "22px", xl: "24px" },
        fontWeight: "500",
        lineHeight: "1.3",
        letterSpacing: "0",
      },
      h3: {
        fontFamily: "sans",
        fontSize: { base: "18px", lg: "20px", xl: "21px" },
        fontWeight: "500",
        lineHeight: "1.3",
        letterSpacing: "0",
      },
      blockquote: {
        pl: 5,
        borderLeft: "2px solid",
        borderColor: "pewter.300",
      },
      "blockquote p": {
        fontSize: { base: "18px", lg: "20px", xl: "24px" },
        fontWeight: "400",
        fontStyle: "italic",
        lineHeight: "1.3",
        letterSpacing: "0",
        color: "pewter.700",
      },
      "blockquote p span": {
        d: "table",
        pt: 1,
        fontSize: { base: "12px", lg: "15px", xl: "16px" },
        fontFamily: "sans",
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: "1.5",
        letterSpacing: "0",
        color: "pewter.700",
      },
      // spacing
      "p:not(:last-child), ul:not(:last-child)": {
        mb: "w2",
      },
      "blockquote:not(:last-child)": {
        mb: "w2",
      },
      "h2:not(:first-of-type), h3:not(:first-of-type)": {
        mt: "w5",
      },
      "h2:not(:last-child), h3:not(:last-child)": {
        mb: "w2",
      },
      "h2 + h3": {
        mt: "w2",
      },
      "td + td": {
        pl: [3],
        borderLeft: "1px solid black",
      },
      "* + table": {
        pt: [5, 6],
      },
      "table + *": {
        pt: [5, 6],
      },
      "thead > tr": {
        border: "initial",
      },
      "tbody > tr:last-of-type": {
        borderColor: "black",
      },
    },
    ".prose": {
      "p + p": {
        mt: [5],
      },
    },
  },
};

export default styles;
