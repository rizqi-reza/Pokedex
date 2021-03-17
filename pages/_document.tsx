import { defaultMetaDescription, defaultPageTitle } from '@utils/constant';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta key="meta-title" title={defaultPageTitle} />
          <meta key="meta-description" name="description" content={defaultMetaDescription} />
          <meta name="application-name" content={defaultPageTitle} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content={defaultPageTitle} />
          <meta name="description" content={defaultMetaDescription} />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#fff" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://res.cloudinary.com/rizqireza/image/upload/v1616001937/Pokedex/apple-touch-icon_xeg5un.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://res.cloudinary.com/rizqireza/image/upload/v1616001937/Pokedex/icon-32_tkzgni.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://res.cloudinary.com/rizqireza/image/upload/v1616001937/Pokedex/icon-16_xjyuto.png"
          />
          <link
            rel="mask-icon"
            href="https://res.cloudinary.com/rizqireza/image/upload/v1616002532/Pokedex/pokeball-icon_stgm3g.svg"
            color="#5bbad5"
          />
          <link
            rel="shortcut icon"
            href="https://res.cloudinary.com/rizqireza/image/upload/v1616001937/Pokedex/favicon_ep1bvg.ico"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://rizqireza-pokedex.vercel.app" />
          <meta name="twitter:title" content={defaultPageTitle} />
          <meta name="twitter:description" content={defaultMetaDescription} />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/rizqireza/image/upload/v1616001937/Pokedex/icon-192_ktgoh5.png"
          />
          <meta name="twitter:creator" content="@rizqirezz" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={defaultPageTitle} />
          <meta property="og:description" content={defaultMetaDescription} />
          <meta property="og:site_name" content={defaultPageTitle} />
          <meta property="og:url" content="https://rizqireza-pokedex.vercel.app" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/rizqireza/image/upload/v1616001937/Pokedex/apple-touch-icon_xeg5un.png"
          />
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
