import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useAuth } from '../lib/providers/auth';

interface GLogoutProps {}

export const GLogout: React.FC<GLogoutProps> = ({}) => {
   const clientId = '752888393960-3nnuptkknken7d0c8663lt85jdg3j7ms.apps.googleusercontent.com';
   const { signOut } = useAuth();

   return <GoogleLogout clientId={clientId} buttonText='Sign Out' onLogoutSuccess={signOut} />;
};
