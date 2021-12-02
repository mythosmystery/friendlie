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
  createProfile: Profile;
  googleSignIn?: Maybe<Auth>;
  likeUser: Scalars['String'];
  login?: Maybe<Auth>;
  register: Auth;
};


export type MutationCreateProfileArgs = {
  profileData: ProfileInput;
};


export type MutationGoogleSignInArgs = {
  tokenId: Scalars['String'];
};


export type MutationLikeUserArgs = {
  id: Scalars['String'];
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

export type Profile = {
  __typename?: 'Profile';
  age: Scalars['Float'];
  bio: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  interests: Array<Scalars['String']>;
  intro: Scalars['String'];
  picture: Scalars['String'];
  user: User;
};

export type ProfileInput = {
  age: Scalars['Float'];
  bio: Scalars['String'];
  gender: Scalars['String'];
  interests: Array<Scalars['String']>;
  intro: Scalars['String'];
  picture: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getProfiles: Array<Profile>;
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
  googlePicture?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  likedBy?: Maybe<Array<User>>;
  likes?: Maybe<Array<User>>;
  name: Scalars['String'];
  profile?: Maybe<Profile>;
};

export type AllUserIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUserIdsQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', id: string }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUser: { __typename?: 'User', id: string, name: string, email: string } };

export type GoogleSignInMutationVariables = Exact<{
  tokenId: Scalars['String'];
}>;


export type GoogleSignInMutation = { __typename?: 'Mutation', googleSignIn?: { __typename?: 'Auth', token: string, user: { __typename?: 'User', id: string, name: string, email: string } } | null | undefined };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string, email: string, googlePicture?: string | null | undefined } | null | undefined };


export const AllUserIdsDocument = gql`
    query allUserIds {
  getUsers {
    id
  }
}
    `;

/**
 * __useAllUserIdsQuery__
 *
 * To run a query within a React component, call `useAllUserIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUserIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUserIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUserIdsQuery(baseOptions?: Apollo.QueryHookOptions<AllUserIdsQuery, AllUserIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUserIdsQuery, AllUserIdsQueryVariables>(AllUserIdsDocument, options);
      }
export function useAllUserIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUserIdsQuery, AllUserIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUserIdsQuery, AllUserIdsQueryVariables>(AllUserIdsDocument, options);
        }
export type AllUserIdsQueryHookResult = ReturnType<typeof useAllUserIdsQuery>;
export type AllUserIdsLazyQueryHookResult = ReturnType<typeof useAllUserIdsLazyQuery>;
export type AllUserIdsQueryResult = Apollo.QueryResult<AllUserIdsQuery, AllUserIdsQueryVariables>;
export const GetUserByIdDocument = gql`
    query getUserById($id: String!) {
  getUser(id: $id) {
    id
    name
    email
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
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
    googlePicture
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