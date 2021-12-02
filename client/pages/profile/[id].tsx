import { InferGetServerSidePropsType } from 'next';
import React, { FC } from 'react';
import { GetUserByIdDocument, GetUserByIdQuery } from '../../generated/graphql';
import { initializeApolloClient } from '../../lib/providers/auth';

type ProfilePageType = InferGetServerSidePropsType<typeof getServerSideProps>;

const apolloClient = initializeApolloClient();

export const getServerSideProps = async ({ params }: any) => {
   const { data } = await apolloClient.query<GetUserByIdQuery>({
      query: GetUserByIdDocument,
      variables: { id: params.id }
   });

   return {
      props: {
         ...data.getUser
      }
   };
};

const Profile: FC<ProfilePageType> = ({ name }) => {
   return <h1>profile page for {name}</h1>;
};
export default Profile;
