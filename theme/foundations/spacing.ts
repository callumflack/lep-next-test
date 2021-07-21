// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/foundations/spacing.ts
export const spacing = {
  px: "1px",
  0: "0",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",

  // dynamic tests
  // https://moderncss.dev/generating-font-size-css-rules-and-creating-a-fluid-type-scale/

  // https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()
  // can be used anywhere a <length>, <frequency>, <angle>, <time>, <percentage>, <number>, or <integer> is allowed.

  // min, preferred and max values
  // min & max: If the preferred value is less / more than this value, the min / max value will be used.
  // The preferred value is the expression whose value will be used as long as the result is between the minimum and maximum values.

  // https://frankchimero.com/blog/2020/redesign-wrapping-up/
  // font-size: clamp(18px, 1.4vw, 22px);
  // The minimum font size is 18px, the max is 22px, and in-between, it will be sized relative to 1.4% of the viewport width, meaning relative sizing will kick in once the window is wider than about 1200px
  w05: "clamp(0.15em, 0.333vw, 0.333em)",
  w1: "clamp(0.25em, 0.5vw, 0.5em)",
  w2: "clamp(0.5em, 0.8vw, 1em)",
  w3: "clamp(1em, 1.25vw, 1.5em)",
  w4: "clamp(1.25em, 1.5vw, 2em)",
  w5: "clamp(1.75em, 2.5vw, 3.25em)",
  w6: "clamp(2.5em, 4vw, 5em)",

  /* DYNAMIC: requires --viewport-basis set to :root */
  inset: "var(--grid-inset)",
  gap: "var(--grid-gap)",
  nav: "var(--nav-height)",
  // w1: "calc(8 / var(--viewport-basis) * 100vw)",
  // w2: "calc(16 / var(--viewport-basis) * 100vw)",
  // w3: "calc(24 / var(--viewport-basis) * 100vw)",
  // w4: "calc(32 / var(--viewport-basis) * 100vw)",
  // w5: "calc(40 / var(--viewport-basis) * 100vw)",
  // w6: "calc(80 / var(--viewport-basis) * 100vw)",
  w7: "calc(120 / var(--viewport-basis) * 100vw)",
  w8: "calc(160 / var(--viewport-basis) * 100vw)",
  w9: "calc(240 / var(--viewport-basis) * 100vw)",
  w10: "calc(320 / var(--viewport-basis) * 100vw)",
  w11: "calc(560 / var(--viewport-basis) * 100vw)",
};

/**
 * @deprecated
 * Spacing tokens are a part of DefaultChakraTheme['sizes']
 */
export type Spacing = typeof spacing;
