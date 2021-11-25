/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
