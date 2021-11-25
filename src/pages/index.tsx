import Head from 'next/head';
import { FC } from 'react';
import { Auth } from 'aws-amplify';

const Home: FC = () => {
   const register = async () => {
      try {
         const { user } = await Auth.signUp({
            username: 'test@test.net',
            password: 'password'
         });
         console.log(user);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <div className='absolute w-screen min-h-screen py-2 overflow-y-auto overflow-x-hidden scrollbar-hide'>
         <Head>
            <title>Friendlie - A Place to Make Friends</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <h1 className='font-rw text-center text-6xl my-8'>Welcome to Friendlie!</h1>
         <div className='w-full h-full flex justify-center items-center'>
            <button
               onClick={register}
               className='bg-green-400 text-white p-3 rounded-sm hover:bg-green-700 hover:text-gray-400 shadow-sm'
            >
               Register
            </button>
         </div>
      </div>
   );
};
export default Home;
