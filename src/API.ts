/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  userUserProfileId?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userUserProfileId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  userProfile?: UserProfile | null,
  responses?: ModelResponseConnection | null,
  createdAt: string,
  updatedAt: string,
  userUserProfileId?: string | null,
  owner?: string | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  user?: User | null,
  userId: string,
  age?: number | null,
  sex?: string | null,
  gender?: string | null,
  height?: number | null,
  occupation?: string | null,
  religion?: string | null,
  currentNationality?: string | null,
  countryOfBirth?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelResponseConnection = {
  __typename: "ModelResponseConnection",
  items:  Array<Response | null >,
  nextToken?: string | null,
};

export type Response = {
  __typename: "Response",
  id: string,
  pollId: string,
  respondentId: string,
  questionId: string,
  content: string,
  createdAt: string,
  respondent?: User | null,
  updatedAt: string,
  pollResponsesId?: string | null,
  pollResponsesCreatedAt?: string | null,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  userUserProfileId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUserProfileInput = {
  id?: string | null,
  userId: string,
  age?: number | null,
  sex?: string | null,
  gender?: string | null,
  height?: number | null,
  occupation?: string | null,
  religion?: string | null,
  currentNationality?: string | null,
  countryOfBirth?: string | null,
};

export type ModelUserProfileConditionInput = {
  userId?: ModelIDInput | null,
  age?: ModelIntInput | null,
  sex?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  height?: ModelFloatInput | null,
  occupation?: ModelStringInput | null,
  religion?: ModelStringInput | null,
  currentNationality?: ModelStringInput | null,
  countryOfBirth?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserProfileInput = {
  id: string,
  userId?: string | null,
  age?: number | null,
  sex?: string | null,
  gender?: string | null,
  height?: number | null,
  occupation?: string | null,
  religion?: string | null,
  currentNationality?: string | null,
  countryOfBirth?: string | null,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type CreatePollInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  topic: string,
  createdAt?: string | null,
};

export type ModelPollConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  topic?: ModelStringInput | null,
  and?: Array< ModelPollConditionInput | null > | null,
  or?: Array< ModelPollConditionInput | null > | null,
  not?: ModelPollConditionInput | null,
};

export type Poll = {
  __typename: "Poll",
  id: string,
  title: string,
  description?: string | null,
  topic: string,
  createdAt: string,
  responses?: ModelResponseConnection | null,
  updatedAt: string,
};

export type UpdatePollInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  topic?: string | null,
  createdAt: string,
};

export type DeletePollInput = {
  id: string,
  createdAt: string,
};

export type CreateResponseInput = {
  id?: string | null,
  pollId: string,
  respondentId: string,
  questionId: string,
  content: string,
  createdAt?: string | null,
  pollResponsesId?: string | null,
  pollResponsesCreatedAt?: string | null,
};

export type ModelResponseConditionInput = {
  pollId?: ModelIDInput | null,
  respondentId?: ModelIDInput | null,
  questionId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelResponseConditionInput | null > | null,
  or?: Array< ModelResponseConditionInput | null > | null,
  not?: ModelResponseConditionInput | null,
  pollResponsesId?: ModelIDInput | null,
  pollResponsesCreatedAt?: ModelStringInput | null,
};

export type UpdateResponseInput = {
  id: string,
  pollId?: string | null,
  respondentId?: string | null,
  questionId?: string | null,
  content?: string | null,
  createdAt?: string | null,
  pollResponsesId?: string | null,
  pollResponsesCreatedAt?: string | null,
};

export type DeleteResponseInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userUserProfileId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  age?: ModelIntInput | null,
  sex?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  height?: ModelFloatInput | null,
  occupation?: ModelStringInput | null,
  religion?: ModelStringInput | null,
  currentNationality?: ModelStringInput | null,
  countryOfBirth?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPollFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  topic?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPollFilterInput | null > | null,
  or?: Array< ModelPollFilterInput | null > | null,
  not?: ModelPollFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPollConnection = {
  __typename: "ModelPollConnection",
  items:  Array<Poll | null >,
  nextToken?: string | null,
};

export type ModelResponseFilterInput = {
  id?: ModelIDInput | null,
  pollId?: ModelIDInput | null,
  respondentId?: ModelIDInput | null,
  questionId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelResponseFilterInput | null > | null,
  or?: Array< ModelResponseFilterInput | null > | null,
  not?: ModelResponseFilterInput | null,
  pollResponsesId?: ModelIDInput | null,
  pollResponsesCreatedAt?: ModelStringInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  age?: ModelSubscriptionIntInput | null,
  sex?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  height?: ModelSubscriptionFloatInput | null,
  occupation?: ModelSubscriptionStringInput | null,
  religion?: ModelSubscriptionStringInput | null,
  currentNationality?: ModelSubscriptionStringInput | null,
  countryOfBirth?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPollFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  topic?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPollFilterInput | null > | null,
  or?: Array< ModelSubscriptionPollFilterInput | null > | null,
};

export type ModelSubscriptionResponseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  pollId?: ModelSubscriptionIDInput | null,
  respondentId?: ModelSubscriptionIDInput | null,
  questionId?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionResponseFilterInput | null > | null,
  or?: Array< ModelSubscriptionResponseFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      userId: string,
      age?: number | null,
      sex?: string | null,
      gender?: string | null,
      height?: number | null,
      occupation?: string | null,
      religion?: string | null,
      currentNationality?: string | null,
      countryOfBirth?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserProfileId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      userId: string,
      age?: number | null,
      sex?: string | null,
      gender?: string | null,
      height?: number | null,
      occupation?: string | null,
      religion?: string | null,
      currentNationality?: string | null,
      countryOfBirth?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserProfileId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      userId: string,
      age?: number | null,
      sex?: string | null,
      gender?: string | null,
      height?: number | null,
      occupation?: string | null,
      religion?: string | null,
      currentNationality?: string | null,
      countryOfBirth?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserProfileId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userUserProfileId?: string | null,
      owner?: string | null,
    } | null,
    userId: string,
    age?: number | null,
    sex?: string | null,
    gender?: string | null,
    height?: number | null,
    occupation?: string | null,
    religion?: string | null,
    currentNationality?: string | null,
    countryOfBirth?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userUserProfileId?: string | null,
      owner?: string | null,
    } | null,
    userId: string,
    age?: number | null,
    sex?: string | null,
    gender?: string | null,
    height?: number | null,
    occupation?: string | null,
    religion?: string | null,
    currentNationality?: string | null,
    countryOfBirth?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userUserProfileId?: string | null,
      owner?: string | null,
    } | null,
    userId: string,
    age?: number | null,
    sex?: string | null,
    gender?: string | null,
    height?: number | null,
    occupation?: string | null,
    religion?: string | null,
    currentNationality?: string | null,
    countryOfBirth?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePollMutationVariables = {
  input: CreatePollInput,
  condition?: ModelPollConditionInput | null,
};

export type CreatePollMutation = {
  createPoll?:  {
    __typename: "Poll",
    id: string,
    title: string,
    description?: string | null,
    topic: string,
    createdAt: string,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdatePollMutationVariables = {
  input: UpdatePollInput,
  condition?: ModelPollConditionInput | null,
};

export type UpdatePollMutation = {
  updatePoll?:  {
    __typename: "Poll",
    id: string,
    title: string,
    description?: string | null,
    topic: string,
    createdAt: string,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeletePollMutationVariables = {
  input: DeletePollInput,
  condition?: ModelPollConditionInput | null,
};

export type DeletePollMutation = {
  deletePoll?:  {
    __typename: "Poll",
    id: string,
    title: string,
    description?: string | null,
    topic: string,
    createdAt: string,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateResponseMutationVariables = {
  input: CreateResponseInput,
  condition?: ModelResponseConditionInput | null,
};

export type CreateResponseMutation = {
  createResponse?:  {
    __typename: "Response",
    id: string,
    pollId: string,
    respondentId: string,
    questionId: string,
    content: string,
    createdAt: string,
    respondent?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userUserProfileId?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    pollResponsesId?: string | null,
    pollResponsesCreatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateResponseMutationVariables = {
  input: UpdateResponseInput,
  condition?: ModelResponseConditionInput | null,
};

export type UpdateResponseMutation = {
  updateResponse?:  {
    __typename: "Response",
    id: string,
    pollId: string,
    respondentId: string,
    questionId: string,
    content: string,
    createdAt: string,
    respondent?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userUserProfileId?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    pollResponsesId?: string | null,
    pollResponsesCreatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteResponseMutationVariables = {
  input: DeleteResponseInput,
  condition?: ModelResponseConditionInput | null,
};

export type DeleteResponseMutation = {
  deleteResponse?:  {
    __typename: "Response",
    id: string,
    pollId: string,
    respondentId: string,
    questionId: string,
    content: string,
    createdAt: string,
    respondent?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userUserProfileId?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    pollResponsesId?: string | null,
    pollResponsesCreatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      userId: string,
      age?: number | null,
      sex?: string | null,
      gender?: string | null,
      height?: number | null,
      occupation?: string | null,
      religion?: string | null,
      currentNationality?: string | null,
      countryOfBirth?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserProfileId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userUserProfileId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userUserProfileId?: string | null,
      owner?: string | null,
    } | null,
    userId: string,
    age?: number | null,
    sex?: string | null,
    gender?: string | null,
    height?: number | null,
    occupation?: string | null,
    religion?: string | null,
    currentNationality?: string | null,
    countryOfBirth?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      userId: string,
      age?: number | null,
      sex?: string | null,
      gender?: string | null,
      height?: number | null,
      occupation?: string | null,
      religion?: string | null,
      currentNationality?: string | null,
      countryOfBirth?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPollQueryVariables = {
  id: string,
  createdAt: string,
};

export type GetPollQuery = {
  getPoll?:  {
    __typename: "Poll",
    id: string,
    title: string,
    description?: string | null,
    topic: string,
    createdAt: string,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListPollsQueryVariables = {
  id?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  filter?: ModelPollFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPollsQuery = {
  listPolls?:  {
    __typename: "ModelPollConnection",
    items:  Array< {
      __typename: "Poll",
      id: string,
      title: string,
      description?: string | null,
      topic: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PollsByTopicQueryVariables = {
  topic: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPollFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PollsByTopicQuery = {
  pollsByTopic?:  {
    __typename: "ModelPollConnection",
    items:  Array< {
      __typename: "Poll",
      id: string,
      title: string,
      description?: string | null,
      topic: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PollsByCreatedAtQueryVariables = {
  createdAt: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPollFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PollsByCreatedAtQuery = {
  pollsByCreatedAt?:  {
    __typename: "ModelPollConnection",
    items:  Array< {
      __typename: "Poll",
      id: string,
      title: string,
      description?: string | null,
      topic: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResponseQueryVariables = {
  id: string,
};

export type GetResponseQuery = {
  getResponse?:  {
    __typename: "Response",
    id: string,
    pollId: string,
    respondentId: string,
    questionId: string,
    content: string,
    createdAt: string,
    respondent?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userUserProfileId?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    pollResponsesId?: string | null,
    pollResponsesCreatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListResponsesQueryVariables = {
  id?: string | null,
  filter?: ModelResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListResponsesQuery = {
  listResponses?:  {
    __typename: "ModelResponseConnection",
    items:  Array< {
      __typename: "Response",
      id: string,
      pollId: string,
      respondentId: string,
      questionId: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      pollResponsesId?: string | null,
      pollResponsesCreatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ResponsesByPollQueryVariables = {
  pollId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ResponsesByPollQuery = {
  responsesByPoll?:  {
    __typename: "ModelResponseConnection",
    items:  Array< {
      __typename: "Response",
      id: string,
      pollId: string,
      respondentId: string,
      questionId: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      pollResponsesId?: string | null,
      pollResponsesCreatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ResponsesByRespondentQueryVariables = {
  respondentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ResponsesByRespondentQuery = {
  responsesByRespondent?:  {
    __typename: "ModelResponseConnection",
    items:  Array< {
      __typename: "Response",
      id: string,
      pollId: string,
      respondentId: string,
      questionId: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      pollResponsesId?: string | null,
      pollResponsesCreatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      userId: string,
      age?: number | null,
      sex?: string | null,
      gender?: string | null,
      height?: number | null,
      occupation?: string | null,
      religion?: string | null,
      currentNationality?: string | null,
      countryOfBirth?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserProfileId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      userId: string,
      age?: number | null,
      sex?: string | null,
      gender?: string | null,
      height?: number | null,
      occupation?: string | null,
      religion?: string | null,
      currentNationality?: string | null,
      countryOfBirth?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserProfileId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    userProfile?:  {
      __typename: "UserProfile",
      id: string,
      userId: string,
      age?: number | null,
      sex?: string | null,
      gender?: string | null,
      height?: number | null,
      occupation?: string | null,
      religion?: string | null,
      currentNationality?: string | null,
      countryOfBirth?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userUserProfileId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userUserProfileId?: string | null,
      owner?: string | null,
    } | null,
    userId: string,
    age?: number | null,
    sex?: string | null,
    gender?: string | null,
    height?: number | null,
    occupation?: string | null,
    religion?: string | null,
    currentNationality?: string | null,
    countryOfBirth?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userUserProfileId?: string | null,
      owner?: string | null,
    } | null,
    userId: string,
    age?: number | null,
    sex?: string | null,
    gender?: string | null,
    height?: number | null,
    occupation?: string | null,
    religion?: string | null,
    currentNationality?: string | null,
    countryOfBirth?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userUserProfileId?: string | null,
      owner?: string | null,
    } | null,
    userId: string,
    age?: number | null,
    sex?: string | null,
    gender?: string | null,
    height?: number | null,
    occupation?: string | null,
    religion?: string | null,
    currentNationality?: string | null,
    countryOfBirth?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePollSubscriptionVariables = {
  filter?: ModelSubscriptionPollFilterInput | null,
};

export type OnCreatePollSubscription = {
  onCreatePoll?:  {
    __typename: "Poll",
    id: string,
    title: string,
    description?: string | null,
    topic: string,
    createdAt: string,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePollSubscriptionVariables = {
  filter?: ModelSubscriptionPollFilterInput | null,
};

export type OnUpdatePollSubscription = {
  onUpdatePoll?:  {
    __typename: "Poll",
    id: string,
    title: string,
    description?: string | null,
    topic: string,
    createdAt: string,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePollSubscriptionVariables = {
  filter?: ModelSubscriptionPollFilterInput | null,
};

export type OnDeletePollSubscription = {
  onDeletePoll?:  {
    __typename: "Poll",
    id: string,
    title: string,
    description?: string | null,
    topic: string,
    createdAt: string,
    responses?:  {
      __typename: "ModelResponseConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateResponseSubscriptionVariables = {
  filter?: ModelSubscriptionResponseFilterInput | null,
  owner?: string | null,
};

export type OnCreateResponseSubscription = {
  onCreateResponse?:  {
    __typename: "Response",
    id: string,
    pollId: string,
    respondentId: string,
    questionId: string,
    content: string,
    createdAt: string,
    respondent?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userUserProfileId?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    pollResponsesId?: string | null,
    pollResponsesCreatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateResponseSubscriptionVariables = {
  filter?: ModelSubscriptionResponseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateResponseSubscription = {
  onUpdateResponse?:  {
    __typename: "Response",
    id: string,
    pollId: string,
    respondentId: string,
    questionId: string,
    content: string,
    createdAt: string,
    respondent?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userUserProfileId?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    pollResponsesId?: string | null,
    pollResponsesCreatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteResponseSubscriptionVariables = {
  filter?: ModelSubscriptionResponseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteResponseSubscription = {
  onDeleteResponse?:  {
    __typename: "Response",
    id: string,
    pollId: string,
    respondentId: string,
    questionId: string,
    content: string,
    createdAt: string,
    respondent?:  {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      userUserProfileId?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    pollResponsesId?: string | null,
    pollResponsesCreatedAt?: string | null,
    owner?: string | null,
  } | null,
};
