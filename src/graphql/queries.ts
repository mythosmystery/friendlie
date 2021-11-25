/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        email
        age
        bio
        likes {
          nextToken
          startedAt
        }
        matches {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        age
        bio
        likes {
          nextToken
          startedAt
        }
        matches {
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
      nextToken
      startedAt
    }
  }
`;
