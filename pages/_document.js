import Document, { Html, Head, Main, NextScript } from "next/document";
import GTMScript from "@/components/AnalyticsGTMScript";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* preload fonts */}
          <link
            rel="preload"
            as="font"
            crossOrigin=""
            href="/fonts/SuisseIntl-Light.woff2"
          />
          {/* viewport-basis variables */}
          <link rel="stylesheet" href="/utils.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <GTMScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
