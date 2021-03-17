import { defaultPageTitle } from '@utils/constant';
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
          <meta
            key="meta-description"
            name="description"
            content="Pokédex web application containing list of pokémon, pokémon details including basic information, basic stats, evolution chain, and moves learned. You can caught a pokémon, give it a nickname, and see list of pokémon catched by you on my pokémon tabs, and you can release pokémon also!"
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
