import { AppProps } from 'next/app';
import { createContext } from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@utils/apollo';
import '../styles/global.styles.css';

export const AppContext = createContext(null);
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
