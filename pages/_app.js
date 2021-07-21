import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import theme from "@/theme";
import FacebookPixel from "@/components/AnalyticsFacebookPixel";
import NProgress from "@/components/NProgress";
import * as gtag from "../lib/gtag";

// use Global for @font-face b/c can't have multiple font-face keys
// within a theme.global.js object
// https://github.com/chakra-ui/chakra-ui/issues/1791#issuecomment-679051632

// add gtag on route change:
// https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Global
        styles={`
          @font-face {
            font-family: "SuisseIntl";
            font-display: swap;
            font-weight: 300;
            src: url("/fonts/SuisseIntl-Light.woff2") format("woff2"),
              url("/fonts/SuisseIntl-Light.woff") format("woff");
          }
          @font-face {
            font-family: "SuisseIntl";
            font-display: swap;
            font-weight: 300;
            font-style: italic;
            src: url("/fonts/SuisseIntl-LightItalic.woff2") format("woff2"),
              url("/fonts/SuisseIntl-LightItalic.woff") format("woff");
          }
          @font-face {
            font-family: "SuisseIntl";
            font-display: swap;
            font-weight: 700;
            src: url("/fonts/SuisseIntl-Bold.woff2") format("woff2"),
              url("/fonts/SuisseIntl-Bold.woff") format("woff");
          }
          @font-face {
            font-family: "SuisseIntl";
            font-display: swap;
            font-weight: 700;
            font-style: italic;
            src: url("/fonts/SuisseIntl-BoldItalic.woff2") format("woff2"),
              url("/fonts/SuisseIntl-BoldItalic.woff") format("woff");
          }

          @font-face {
            font-family: "Cambon";
            font-display: swap;
            font-weight: 400;
            src: url("/fonts/Cambon-Regular.otf") format("woff");
          }
          @font-face {
            font-family: "Cambon";
            font-display: swap;
            font-weight: 400;
            font-style: italic;
            src: url("/fonts/Cambon-Italic.otf") format("woff");
          }
          @font-face {
            font-family: "Cambon";
            font-display: swap;
            font-weight: 700;
            src: url("/fonts/Cambon-Bold.otf") format("woff");
          }
          @font-face {
            font-family: "Cambon";
            font-display: swap;
            font-weight: 700;
            font-style: italic;
            src: url("/fonts/Cambon-BoldItalic.otf") format("woff");
          }

          @font-face {
            font-family: "Feijoa";
            font-display: swap;
            font-weight: 400;
            src: url("/fonts/feijoa-test-display.woff") format("woff");
          }

          @font-face {
            font-family: "Signifier";
            font-display: swap;
            font-weight: 300;
            src: url("/fonts/signifier-test-light.woff") format("woff");
          }
          @font-face {
            font-family: "Signifier";
            font-display: swap;
            font-weight: 400;
            src: url("/fonts/signifier-test-regular.woff") format("woff");
          }
          @font-face {
            font-family: "Signifier";
            font-display: swap;
            font-weight: 400;
            font-style: italic;
            src: url("/fonts/signifier-test-regular-italic.woff") format("woff");
          }
          @font-face {
            font-family: "Signifier";
            font-display: swap;
            font-weight: 500;
            src: url("/fonts/signifier-test-medium.woff") format("woff");
          }
          @font-face {
            font-family: "Signifier";
            font-display: swap;
            font-weight: 500;
            font-style: italic;
            src: url("/fonts/signifier-test-medium-italic.woff") format("woff");
          }

          @font-face {
            font-family: "Söhne";
            font-display: swap;
            font-weight: 300;
            src: url("/fonts/soehne-test-leicht.woff") format("woff");
          }
          @font-face {
            font-family: "Söhne";
            font-display: swap;
            font-weight: 400;
            src: url("/fonts/soehne-test-buch.woff") format("woff");
          }
          @font-face {
            font-family: "Söhne";
            font-display: swap;
            font-weight: 500;
            src: url("/fonts/soehne-test-kraftig.woff") format("woff");
          }
          @font-face {
            font-family: "Söhne";
            font-display: swap;
            font-weight: 600;
            src: url("/fonts/soehne-test-halbfett.woff") format("woff");
          }
          @font-face {
            font-family: "Söhne";
            font-display: swap;
            font-weight: 700;
            src: url("/fonts/soehne-test-dreiviertelfett.woff") format("woff");
          }
          @font-face {
            font-family: "Söhne Mono";
            font-display: swap;
            font-weight: 400;
            src: url("/fonts/soehne-mono-test-buch.woff") format("woff");
          }
          @font-face {
            font-family: "Söhne Mono";
            font-display: swap;
            font-weight: 600;
            src: url("/fonts/soehne-mono-test-halbfett.woff") format("woff");
          }
          @font-face {
            font-family: "quadraat";
            font-display: swap;
            font-weight: 400;
            src: url("/fonts/quadraat.woff") format("woff");
          }
          @font-face {
            font-family: "quadraat";
            font-display: swap;
            font-weight: 400;
            font-style: italic;
            src: url("/fonts/quadraat-italic.woff") format("woff");
          }
          @font-face {
            font-family: "quadraat";
            font-display: swap;
            font-weight: 700;
            src: url("/fonts/quadraat-bold.woff") format("woff");
          }
          @font-face {
            font-family: "quadraat";
            font-display: swap;
            font-weight: 700;
            font-style: italic;
            src: url("/fonts/quadraat-bolditalic.woff") format("woff");
          }
        `}
      />
      <FacebookPixel>
        <NProgress
          color="#000"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          options={{ trickle: false, showSpinner: false }}
        />
        <Component {...pageProps} />
      </FacebookPixel>
    </ChakraProvider>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};
