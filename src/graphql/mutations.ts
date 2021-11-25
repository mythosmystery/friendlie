/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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