/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePoll = /* GraphQL */ `subscription OnCreatePoll($filter: ModelSubscriptionPollFilterInput) {
  onCreatePoll(filter: $filter) {
    id
    title
    description
    topic
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
` as GeneratedSubscription<
  APITypes.OnCreatePollSubscriptionVariables,
  APITypes.OnCreatePollSubscription
>;
export const onUpdatePoll = /* GraphQL */ `subscription OnUpdatePoll($filter: ModelSubscriptionPollFilterInput) {
  onUpdatePoll(filter: $filter) {
    id
    title
    description
    topic
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
` as GeneratedSubscription<
  APITypes.OnUpdatePollSubscriptionVariables,
  APITypes.OnUpdatePollSubscription
>;
export const onDeletePoll = /* GraphQL */ `subscription OnDeletePoll($filter: ModelSubscriptionPollFilterInput) {
  onDeletePoll(filter: $filter) {
    id
    title
    description
    topic
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
` as GeneratedSubscription<
  APITypes.OnDeletePollSubscriptionVariables,
  APITypes.OnDeletePollSubscription
>;
export const onCreateQuestion = /* GraphQL */ `subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
  onCreateQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQuestionSubscriptionVariables,
  APITypes.OnCreateQuestionSubscription
>;
export const onUpdateQuestion = /* GraphQL */ `subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
  onUpdateQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuestionSubscriptionVariables,
  APITypes.OnUpdateQuestionSubscription
>;
export const onDeleteQuestion = /* GraphQL */ `subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
  onDeleteQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuestionSubscriptionVariables,
  APITypes.OnDeleteQuestionSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onCreateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onUpdateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onDeleteUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onCreateResponse = /* GraphQL */ `subscription OnCreateResponse(
  $filter: ModelSubscriptionResponseFilterInput
  $owner: String
) {
  onCreateResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateResponseSubscriptionVariables,
  APITypes.OnCreateResponseSubscription
>;
export const onUpdateResponse = /* GraphQL */ `subscription OnUpdateResponse(
  $filter: ModelSubscriptionResponseFilterInput
  $owner: String
) {
  onUpdateResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateResponseSubscriptionVariables,
  APITypes.OnUpdateResponseSubscription
>;
export const onDeleteResponse = /* GraphQL */ `subscription OnDeleteResponse(
  $filter: ModelSubscriptionResponseFilterInput
  $owner: String
) {
  onDeleteResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteResponseSubscriptionVariables,
  APITypes.OnDeleteResponseSubscription
>;