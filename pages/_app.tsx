import { AppProps } from 'next/app';
import { createContext } from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@utils/apollo';
import NextHead from 'next/head';
import '../styles/global.styles.css';

export const AppContext = createContext(null);
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <NextHead>
        <html lang="en" />
        <title>Pokedéx by Rizqi Reza</title>
        <meta
          name="description"
          content="Pokédex web application containing list of pokémon, pokémon details including basic information, basic stats, evolution chain, and moves learned. You can caught a pokémon, give it a nickname, and see list of pokémon catched by you on my pokémon tabs, and you can release pokémon also. Let's explore and find pokémon together!"
        />
      </NextHead>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
