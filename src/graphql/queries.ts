/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      age
      bio
      likes {
        items {
          id
          name
          age
          bio
          createdAt
          updatedAt
          userLikesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userLikesId
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        age
        bio
        likes {
          nextToken
        }
        createdAt
        updatedAt
        userLikesId
        owner
      }
      nextToken
    }
  }
`;
