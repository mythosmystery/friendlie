import Head from 'next/head';
import { FC } from 'react';
import { GLogin } from '../components/GLogin';
import { GLogout } from '../components/GLogout';
import { useMeQuery } from '../generated/graphql';

const Home: FC = () => {
   const { data, loading } = useMeQuery();
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
            {data?.me ? <GLogout /> : <GLogin />}
            {loading ? <h1>Loading...</h1> : <pre>{JSON.stringify(data?.me, null, 2)}</pre>}
            {data?.me?.googlePicture ? <img src={data.me.googlePicture} className='rounded-full' /> : null}
         </div>
      </>
   );
};
export default Home;
