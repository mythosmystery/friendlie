import React from 'react';
import { refreshTokenSetup } from '../lib/utils/refreshToken';
import { GoogleLogin } from 'react-google-login';
import { useGoogleSignInMutation } from '../generated/graphql';
import { useAuth } from '../lib/providers/auth';

interface GLoginProps {}

export const GLogin: React.FC<GLoginProps> = ({}) => {
   const clientId = '752888393960-3nnuptkknken7d0c8663lt85jdg3j7ms.apps.googleusercontent.com';
   const [googleSignIn] = useGoogleSignInMutation();
   const { signIn } = useAuth();

   const onSuccess = async (res: any) => {
      try {
         const { data } = await googleSignIn({
            variables: { tokenId: res.tokenId }
         });
         if (data?.googleSignIn?.token) {
            signIn(data.googleSignIn.token);
         }
      } catch (err) {
         console.log(err);
      }
      refreshTokenSetup(res);
   };

   const onFailure = (res: any) => {
      console.log('Login failed: res:', res);
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
