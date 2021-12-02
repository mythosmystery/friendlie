import Head from 'next/head';
import { FC } from 'react';
import { GLogin } from '../components/GLogin';

const Home: FC = () => {
   return (
      <>
         <Head>
            <title>Friendlie - A Place to Make Friends</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <h1 className='font-rw text-center text-6xl my-8'>
            Welcome to <span className='font-bold text-brand'>Friendlie!</span>
         </h1>
         <div className='w-full h-full break-words flex flex-col justify-center items-center'>
            <GLogin />
         </div>
      </>
   );
};
export default Home;
