import Head from 'next/head';
import { AppProps } from 'next/app';
import { FC } from 'react';
import '../lib/globals.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
   const client = new ApolloClient({
      uri: 'http://localhost:3001/graphql',
      cache: new InMemoryCache()
   });
   return (
      <>
         <Head>
            <link
               href='https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;600;700;800&display=swap'
               rel='stylesheet'
            />
         </Head>
         <ApolloProvider client={client}>
            <Component {...pageProps} />
         </ApolloProvider>
      </>
   );
};

export default MyApp;
