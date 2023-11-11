"use strict";
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
Object.defineProperty(exports, "__esModule", { value: true });
exports.onDeleteResponse = exports.onUpdateResponse = exports.onCreateResponse = exports.onDeletePoll = exports.onUpdatePoll = exports.onCreatePoll = exports.onDeleteUserProfile = exports.onUpdateUserProfile = exports.onCreateUserProfile = exports.onDeleteUser = exports.onUpdateUser = exports.onCreateUser = void 0;
exports.onCreateUser = `subscription OnCreateUser(
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
`;
exports.onUpdateUser = `subscription OnUpdateUser(
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
`;
exports.onDeleteUser = `subscription OnDeleteUser(
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
`;
exports.onCreateUserProfile = `subscription OnCreateUserProfile(
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
`;
exports.onUpdateUserProfile = `subscription OnUpdateUserProfile(
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
`;
exports.onDeleteUserProfile = `subscription OnDeleteUserProfile(
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
`;
exports.onCreatePoll = `subscription OnCreatePoll($filter: ModelSubscriptionPollFilterInput) {
  onCreatePoll(filter: $filter) {
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
exports.onUpdatePoll = `subscription OnUpdatePoll($filter: ModelSubscriptionPollFilterInput) {
  onUpdatePoll(filter: $filter) {
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
exports.onDeletePoll = `subscription OnDeletePoll($filter: ModelSubscriptionPollFilterInput) {
  onDeletePoll(filter: $filter) {
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
exports.onCreateResponse = `subscription OnCreateResponse(
  $filter: ModelSubscriptionResponseFilterInput
  $owner: String
) {
  onCreateResponse(filter: $filter, owner: $owner) {
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
exports.onUpdateResponse = `subscription OnUpdateResponse(
  $filter: ModelSubscriptionResponseFilterInput
  $owner: String
) {
  onUpdateResponse(filter: $filter, owner: $owner) {
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
exports.onDeleteResponse = `subscription OnDeleteResponse(
  $filter: ModelSubscriptionResponseFilterInput
  $owner: String
) {
  onDeleteResponse(filter: $filter, owner: $owner) {
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
