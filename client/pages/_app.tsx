import Head from 'next/head';
import { AppProps } from 'next/app';
import { FC } from 'react';
import 'tailwindcss/tailwind.css';
import { AuthProvider } from '../lib/providers/auth';
import { ThemeProvider } from '../lib/providers/theme';
import Layout from '../components/layout';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
   return (
      <>
         <Head>
            <link
               href='https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;600;700;800&display=swap'
               rel='stylesheet'
            />
         </Head>
         <AuthProvider>
            <ThemeProvider>
               <Layout>
                  <Component {...pageProps} />
               </Layout>
            </ThemeProvider>
         </AuthProvider>
      </>
   );
};

export default MyApp;
