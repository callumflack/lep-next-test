import { createBreakpoints } from "@chakra-ui/theme-tools";

/* https://github.com/chakra-ui/chakra-ui/blob/develop/packages/theme/src/foundations/breakpoints.ts */

const breakpoints = createBreakpoints({
  sm: "30em", // 480
  md: "48em", // 768
  lg: "62em", // 992
  xl: "80em", // 1280
  "2xl": "115em", // 1520
  xxl: "92.5em", // 1520
  "3xl": "115em", // 1840
  xxxl: "115em", // 1840
  super: "130em", // 2080
});

export default breakpoints;
