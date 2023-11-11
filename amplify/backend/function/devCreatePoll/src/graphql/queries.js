"use strict";
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
Object.defineProperty(exports, "__esModule", { value: true });
exports.responsesByRespondent = exports.responsesByPoll = exports.listResponses = exports.getResponse = exports.pollsByCreatedAt = exports.pollsByTopic = exports.listPolls = exports.getPoll = exports.listUserProfiles = exports.getUserProfile = exports.listUsers = exports.getUser = void 0;
exports.getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    userProfile {
      id
      userId
      age
      sex
      gender
      height
      occupation
      religion
      currentNationality
      countryOfBirth
      createdAt
      updatedAt
      owner
      __typename
    }
    responses {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    userUserProfileId
    owner
    __typename
  }
}
`;
exports.listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      createdAt
      updatedAt
      userUserProfileId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
`;
exports.getUserProfile = `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    id
    user {
      id
      username
      createdAt
      updatedAt
      userUserProfileId
      owner
      __typename
    }
    userId
    age
    sex
    gender
    height
    occupation
    religion
    currentNationality
    countryOfBirth
    createdAt
    updatedAt
    owner
    __typename
  }
}
`;
exports.listUserProfiles = `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      age
      sex
      gender
      height
      occupation
      religion
      currentNationality
      countryOfBirth
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
`;
exports.getPoll = `query GetPoll($id: ID!, $createdAt: AWSDateTime!) {
  getPoll(id: $id, createdAt: $createdAt) {
    id
    title
    description
    topic
    createdAt
    responses {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
`;
exports.listPolls = `query ListPolls(
  $id: ID
  $createdAt: ModelStringKeyConditionInput
  $filter: ModelPollFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPolls(
    id: $id
    createdAt: $createdAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      title
      description
      topic
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
`;
exports.pollsByTopic = `query PollsByTopic(
  $topic: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPollFilterInput
  $limit: Int
  $nextToken: String
) {
  pollsByTopic(
    topic: $topic
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      topic
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
`;
exports.pollsByCreatedAt = `query PollsByCreatedAt(
  $createdAt: AWSDateTime!
  $sortDirection: ModelSortDirection
  $filter: ModelPollFilterInput
  $limit: Int
  $nextToken: String
) {
  pollsByCreatedAt(
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      topic
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
`;
exports.getResponse = `query GetResponse($id: ID!) {
  getResponse(id: $id) {
    id
    pollId
    respondentId
    questionId
    content
    createdAt
    respondent {
      id
      username
      createdAt
      updatedAt
      userUserProfileId
      owner
      __typename
    }
    updatedAt
    pollResponsesId
    pollResponsesCreatedAt
    owner
    __typename
  }
}
`;
exports.listResponses = `query ListResponses(
  $id: ID
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listResponses(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      pollId
      respondentId
      questionId
      content
      createdAt
      updatedAt
      pollResponsesId
      pollResponsesCreatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
`;
exports.responsesByPoll = `query ResponsesByPoll(
  $pollId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  responsesByPoll(
    pollId: $pollId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      pollId
      respondentId
      questionId
      content
      createdAt
      updatedAt
      pollResponsesId
      pollResponsesCreatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
`;
exports.responsesByRespondent = `query ResponsesByRespondent(
  $respondentId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  responsesByRespondent(
    respondentId: $respondentId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      pollId
      respondentId
      questionId
      content
      createdAt
      updatedAt
      pollResponsesId
      pollResponsesCreatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
`;
