import Head from 'next/head';
import { FC } from 'react';

const Home: FC = () => {
   return (
      <div className='absolute w-screen min-h-screen py-2 overflow-y-auto overflow-x-hidden scrollbar-hide'>
         <Head>
            <title>Friendlie - A Place to Make Friends</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <h1 className='font-rw text-center text-6xl my-8'>Welcome to Friendlie!</h1>
      </div>
   );
};
export default Home;
