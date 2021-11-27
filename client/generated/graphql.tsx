import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  googleSignIn?: Maybe<Auth>;
  login?: Maybe<Auth>;
  register: Auth;
};


export type MutationGoogleSignInArgs = {
  tokenId: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getUser: User;
  getUsers: Array<User>;
  hello: Scalars['String'];
  me?: Maybe<User>;
};


export type QueryGetUserArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GoogleSignInMutationVariables = Exact<{
  tokenId: Scalars['String'];
}>;


export type GoogleSignInMutation = { __typename?: 'Mutation', googleSignIn?: { __typename?: 'Auth', token: string, user: { __typename?: 'User', id: string, name: string, email: string } } | null | undefined };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string, email: string } | null | undefined };


export const GoogleSignInDocument = gql`
    mutation GoogleSignIn($tokenId: String!) {
  googleSignIn(tokenId: $tokenId) {
    token
    user {
      id
      name
      email
    }
  }
}
    `;
export type GoogleSignInMutationFn = Apollo.MutationFunction<GoogleSignInMutation, GoogleSignInMutationVariables>;

/**
 * __useGoogleSignInMutation__
 *
 * To run a mutation, you first call `useGoogleSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleSignInMutation, { data, loading, error }] = useGoogleSignInMutation({
 *   variables: {
 *      tokenId: // value for 'tokenId'
 *   },
 * });
 */
export function useGoogleSignInMutation(baseOptions?: Apollo.MutationHookOptions<GoogleSignInMutation, GoogleSignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GoogleSignInMutation, GoogleSignInMutationVariables>(GoogleSignInDocument, options);
      }
export type GoogleSignInMutationHookResult = ReturnType<typeof useGoogleSignInMutation>;
export type GoogleSignInMutationResult = Apollo.MutationResult<GoogleSignInMutation>;
export type GoogleSignInMutationOptions = Apollo.BaseMutationOptions<GoogleSignInMutation, GoogleSignInMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    name
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;