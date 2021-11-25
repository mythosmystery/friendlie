/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      name
      email
      age
      bio
      likes {
        items {
          id
          name
          email
          age
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userLikesId
          userMatchesId
          owner
        }
        nextToken
        startedAt
      }
      matches {
        items {
          id
          name
          email
          age
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userLikesId
          userMatchesId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userLikesId
      userMatchesId
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      name
      email
      age
      bio
      likes {
        items {
          id
          name
          email
          age
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userLikesId
          userMatchesId
          owner
        }
        nextToken
        startedAt
      }
      matches {
        items {
          id
          name
          email
          age
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userLikesId
          userMatchesId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userLikesId
      userMatchesId
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      name
      email
      age
      bio
      likes {
        items {
          id
          name
          email
          age
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userLikesId
          userMatchesId
          owner
        }
        nextToken
        startedAt
      }
      matches {
        items {
          id
          name
          email
          age
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userLikesId
          userMatchesId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userLikesId
      userMatchesId
      owner
    }
  }
`;
