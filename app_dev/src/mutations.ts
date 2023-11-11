/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../src/API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPoll = /* GraphQL */ `mutation CreatePoll(
  $input: CreatePollInput!
  $condition: ModelPollConditionInput
) {
  createPoll(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePollMutationVariables,
  APITypes.CreatePollMutation
>;
export const updatePoll = /* GraphQL */ `mutation UpdatePoll(
  $input: UpdatePollInput!
  $condition: ModelPollConditionInput
) {
  updatePoll(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePollMutationVariables,
  APITypes.UpdatePollMutation
>;
export const deletePoll = /* GraphQL */ `mutation DeletePoll(
  $input: DeletePollInput!
  $condition: ModelPollConditionInput
) {
  deletePoll(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePollMutationVariables,
  APITypes.DeletePollMutation
>;
export const createQuestion = /* GraphQL */ `mutation CreateQuestion(
  $input: CreateQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  createQuestion(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateQuestionMutationVariables,
  APITypes.CreateQuestionMutation
>;
export const updateQuestion = /* GraphQL */ `mutation UpdateQuestion(
  $input: UpdateQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  updateQuestion(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateQuestionMutationVariables,
  APITypes.UpdateQuestionMutation
>;
export const deleteQuestion = /* GraphQL */ `mutation DeleteQuestion(
  $input: DeleteQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  deleteQuestion(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteQuestionMutationVariables,
  APITypes.DeleteQuestionMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $input: CreateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  createUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $input: UpdateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  updateUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $input: DeleteUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  deleteUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const createResponse = /* GraphQL */ `mutation CreateResponse(
  $input: CreateResponseInput!
  $condition: ModelResponseConditionInput
) {
  createResponse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateResponseMutationVariables,
  APITypes.CreateResponseMutation
>;
export const updateResponse = /* GraphQL */ `mutation UpdateResponse(
  $input: UpdateResponseInput!
  $condition: ModelResponseConditionInput
) {
  updateResponse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateResponseMutationVariables,
  APITypes.UpdateResponseMutation
>;
export const deleteResponse = /* GraphQL */ `mutation DeleteResponse(
  $input: DeleteResponseInput!
  $condition: ModelResponseConditionInput
) {
  deleteResponse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteResponseMutationVariables,
  APITypes.DeleteResponseMutation
>;
