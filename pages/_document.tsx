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
          <link rel="manifest" href="manifest.json" />
          <meta key="meta-title" title={defaultPageTitle} />
          <meta key="meta-description" name="description" content={defaultMetaDescription} />
          <meta name="application-name" content={defaultPageTitle} />
          <meta name="description" content={defaultMetaDescription} />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#fff" />

          {/* Apple Meta Tags */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={defaultPageTitle} />
          <link
            href="https://res.cloudinary.com/rizqireza/image/upload/v1616056182/Pokedex/splashscreens/iphone5_splash_pfaqmy.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/rizqireza/image/upload/v1616056181/Pokedex/splashscreens/iphone6_splash_xqx0hw.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/rizqireza/image/upload/v1616056181/Pokedex/splashscreens/iphoneplus_splash_g0nszn.png"
            media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/rizqireza/image/upload/v1616056182/Pokedex/splashscreens/iphonex_splash_dckyw6.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/rizqireza/image/upload/v1616056182/Pokedex/splashscreens/iphonexr_splash_csfvmc.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/rizqireza/image/upload/v1616056181/Pokedex/splashscreens/iphonexsmax_splash_jorygo.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/rizqireza/image/upload/v1616056181/Pokedex/splashscreens/ipad_splash_s83dti.png"
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/rizqireza/image/upload/v1616056181/Pokedex/splashscreens/ipadpro1_splash_a8tgre.png"
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/rizqireza/image/upload/v1616056182/Pokedex/splashscreens/ipadpro3_splash_o8tjoy.png"
            media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/rizqireza/image/upload/v1616056181/Pokedex/splashscreens/ipadpro2_splash_gasnm4.png"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
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
