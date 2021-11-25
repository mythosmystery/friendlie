import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { FC } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
   return (
      <>
         <Head>
            <link
               href='https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;600;700;800&display=swap'
               rel='stylesheet'
            />
         </Head>
         <Component {...pageProps} />
      </>
   );
};

export default MyApp;
