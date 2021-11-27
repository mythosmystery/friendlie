import React from 'react';
import { refreshTokenSetup } from '../lib/refreshToken';
import { GoogleLogin } from 'react-google-login';
import { useGoogleSignInMutation } from '../generated/graphql';

interface GLoginProps {}

export const GLogin: React.FC<GLoginProps> = ({}) => {
   const clientId = '752888393960-3nnuptkknken7d0c8663lt85jdg3j7ms.apps.googleusercontent.com';
   const [googleSignIn] = useGoogleSignInMutation();

   const onSuccess = async (res: any) => {
      console.log('Login Success: currentUser:', res);
      try {
         const { data } = await googleSignIn({ variables: { tokenId: res.tokenId } });
         console.log(data);
      } catch (err) {
         console.log(err);
      }
      alert(`Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`);
      refreshTokenSetup(res);
   };

   const onFailure = (res: any) => {
      console.log('Login failed: res:', res);
      alert(`Failed to login. 😢 `);
   };

   return (
      <GoogleLogin
         clientId={clientId}
         buttonText='Sign in with Google'
         onSuccess={onSuccess}
         onFailure={onFailure}
         cookiePolicy={'single_host_origin'}
      />
   );
};
