/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPoll = /* GraphQL */ `query GetPoll($id: ID!, $createdAt: AWSDateTime!) {
  getPoll(id: $id, createdAt: $createdAt) {
    id
    title
    description
    topicg
    tags
    createdAt
    questions {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPollQueryVariables, APITypes.GetPollQuery>;
export const listPolls = /* GraphQL */ `query ListPolls(
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
      tags
      createdAt
      updatedAt
      questions {
        items {
          id
          content
          questionType
          options
          required
        }
      }
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPollsQueryVariables, APITypes.ListPollsQuery>;

export const getQuestion = /* GraphQL */ `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
    id
    pollId
    pollCreatedAt
    content
    questionType
    options
    required
    poll {
      id
      title
      description
      topic
      tags
      createdAt
      updatedAt
      __typename
    }
    responses {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    pollQuestionsId
    pollQuestionsCreatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetQuestionQueryVariables,
  APITypes.GetQuestionQuery
>;
export const listQuestions = /* GraphQL */ `query ListQuestions(
  $pollId: ID
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: {pollId: {eq: $pollId}}, limit: $limit, nextToken: $nextToken) {
    items {
      id
      pollId
      pollCreatedAt
      content
      questionType
      options
      required
      createdAt
      updatedAt
      pollQuestionsId
      pollQuestionsCreatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuestionsQueryVariables,
  APITypes.ListQuestionsQuery
>;


export const pollsByTopic = /* GraphQL */ `query PollsByTopic(
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
      tags
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PollsByTopicQueryVariables,
  APITypes.PollsByTopicQuery
>;
export const pollsByCreatedAt = /* GraphQL */ `query PollsByCreatedAt(
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
      tags
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PollsByCreatedAtQueryVariables,
  APITypes.PollsByCreatedAtQuery
>;
export const questionsByPollIdAndId = /* GraphQL */ `query QuestionsByPollIdAndId(
  $pollId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  questionsByPollIdAndId(
    pollId: $pollId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      pollId
      pollCreatedAt
      content
      questionType
      options
      required
      createdAt
      updatedAt
      pollQuestionsId
      pollQuestionsCreatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QuestionsByPollIdAndIdQueryVariables,
  APITypes.QuestionsByPollIdAndIdQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
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
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
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
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
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
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
export const getResponse = /* GraphQL */ `query GetResponse($id: ID!) {
  getResponse(id: $id) {
    id
    pollId
    questionId
    respondentId
    answer
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
    question {
      id
      pollId
      pollCreatedAt
      content
      questionType
      options
      required
      createdAt
      updatedAt
      pollQuestionsId
      pollQuestionsCreatedAt
      __typename
    }
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResponseQueryVariables,
  APITypes.GetResponseQuery
>;
export const listResponses = /* GraphQL */ `query ListResponses(
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
      questionId
      respondentId
      answer
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResponsesQueryVariables,
  APITypes.ListResponsesQuery
>;
export const responsesByPollIdAndCreatedAt = /* GraphQL */ `query ResponsesByPollIdAndCreatedAt(
  $pollId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  responsesByPollIdAndCreatedAt(
    pollId: $pollId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      pollId
      questionId
      respondentId
      answer
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ResponsesByPollIdAndCreatedAtQueryVariables,
  APITypes.ResponsesByPollIdAndCreatedAtQuery
>;
export const responsesByQuestionIdAndCreatedAt = /* GraphQL */ `query ResponsesByQuestionIdAndCreatedAt(
  $questionId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  responsesByQuestionIdAndCreatedAt(
    questionId: $questionId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      pollId
      questionId
      respondentId
      answer
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ResponsesByQuestionIdAndCreatedAtQueryVariables,
  APITypes.ResponsesByQuestionIdAndCreatedAtQuery
>;
export const responsesByRespondentIdAndCreatedAt = /* GraphQL */ `query ResponsesByRespondentIdAndCreatedAt(
  $respondentId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  responsesByRespondentIdAndCreatedAt(
    respondentId: $respondentId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      pollId
      questionId
      respondentId
      answer
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ResponsesByRespondentIdAndCreatedAtQueryVariables,
  APITypes.ResponsesByRespondentIdAndCreatedAtQuery
>;
