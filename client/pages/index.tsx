import Head from 'next/head';
import { FC } from 'react';
import { refreshTokenSetup } from '../lib/refreshToken';
import { GoogleLogin } from 'react-google-login';

const Home: FC = () => {
   const clientId = '752888393960-3nnuptkknken7d0c8663lt85jdg3j7ms.apps.googleusercontent.com';
   const onSuccess = (res: any) => {
      console.log('Login Success: currentUser:', res.profileObj);
      alert(`Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`);
      refreshTokenSetup(res);
   };

   const onFailure = (res: any) => {
      console.log('Login failed: res:', res);
      alert(`Failed to login. 😢 `);
   };

   return (
      <div className='absolute w-screen min-h-screen py-2 overflow-y-auto overflow-x-hidden scrollbar-hide'>
         <Head>
            <title>Friendlie - A Place to Make Friends</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <h1 className='font-rw text-center text-6xl my-8'>Welcome to Friendlie!</h1>
         <div className='w-full h-full flex justify-center items-center'>
            <GoogleLogin
               clientId={clientId}
               buttonText='Sign in with Google'
               onSuccess={onSuccess}
               onFailure={onFailure}
               cookiePolicy={'single_host_origin'}
            />
         </div>
      </div>
   );
};
export default Home;
