import { InferGetStaticPropsType } from 'next';
import React, { FC } from 'react';
import { AllUserIdsDocument, AllUserIdsQuery, GetUserByIdDocument, GetUserByIdQuery } from '../../generated/graphql';
import { initializeApolloClient } from '../../lib/providers/auth';

type UserPageType = InferGetStaticPropsType<typeof getStaticProps>;

const apolloClient = initializeApolloClient();

export const getStaticPaths = async () => {
   const { data } = await apolloClient.query<AllUserIdsQuery>({ query: AllUserIdsDocument });

   return {
      paths: data.getUsers.map(({ id }) => {
         return {
            params: {
               id
            }
         };
      }),
      fallback: false
   };
};

export const getStaticProps = async ({ params }: any) => {
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

const UserPage: FC<UserPageType> = ({ id, email, name }) => {
   return (
      <div>
         <p>{id}</p>
         <p>{name}</p>
         <p>{email}</p>
      </div>
   );
};
export default UserPage;
