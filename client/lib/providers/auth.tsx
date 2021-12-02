import React, { useState, useContext, createContext, FC, useEffect } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, NormalizedCacheObject } from '@apollo/client';
import merge from 'deepmerge';

type AuthContextType = {
   setAuthToken: React.Dispatch<React.SetStateAction<string | null>>;
   isSignedIn: () => boolean;
   signIn: (token: string) => void;
   signOut: () => void;
   getAuthHeaders: () => string | null;
};

const AuthContext = createContext(null as any as AuthContextType);

export const AuthProvider: FC<{ initialState: any }> = ({ children, initialState }) => {
   const auth = useProvideAuth();

   useEffect(() => {
      localStorage.getItem('auth-token') ? auth.setAuthToken(localStorage.getItem('auth-token')) : null;
   }, []);

   return (
      <AuthContext.Provider value={auth}>
         <ApolloProvider client={initializeApolloClient(initialState)}>{children}</ApolloProvider>
      </AuthContext.Provider>
   );
};

export const useAuth = () => {
   return useContext(AuthContext);
};

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = (authorization: string | null = null): ApolloClient<any> => {
   const link = new HttpLink({
      uri: 'http://localhost:3001/graphql',
      headers: {
         authorization
      }
   });

   return new ApolloClient({
      link,
      cache: new InMemoryCache(),
      ssrMode: typeof window === 'undefined'
   });
};

export const initializeApolloClient = (initialState: any = null): ApolloClient<any> => {
   const _apolloClient = apolloClient ?? createApolloClient();

   // If your page has Next.js data fetching methods that use Apollo Client, the initial state
   // get hydrated here
   if (initialState) {
      // Get existing cache, loaded during client side data fetching
      const existingCache = _apolloClient.extract();

      // Merge the existing cache into data passed from getStaticProps/getServerSideProps
      const data = merge(initialState, existingCache);

      // Restore the cache with the merged data
      _apolloClient.cache.restore(data);
   }
   // For SSG and SSR always create a new Apollo Client
   if (typeof window === 'undefined') return _apolloClient;
   // Create the Apollo Client once in the client
   if (!apolloClient) apolloClient = _apolloClient;

   return _apolloClient;
};

function useProvideAuth(): AuthContextType {
   const [authToken, setAuthToken] = useState(null as null | string);

   const signIn = (token: string) => {
      setAuthToken(token);
      localStorage.setItem('auth-token', token);
   };

   const signOut = () => {
      setAuthToken(null);
      localStorage.clear();
   };

   const isSignedIn = () => {
      if (authToken) {
         return true;
      } else {
         return false;
      }
   };

   const getAuthHeaders = () => {
      if (!authToken) return null;

      return `Bearer ${authToken}`;
   };

   return {
      setAuthToken,
      isSignedIn,
      signIn,
      signOut,
      getAuthHeaders
   };
}
