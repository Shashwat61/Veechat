/* eslint-disable react/react-in-jsx-scope */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          
          <link rel="manifest" href="/manifest.json" />
          <link href="/icon.png" rel="icon" type="image/png" sizes="16x16" />
          <link href="/icon.png" rel="icon" type="image/png" sizes="32x32" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;