import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier, CompositeIdentifier, OptionallyManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum QuestionType {
  TEXT = "TEXT",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  CHECKBOX = "CHECKBOX",
  SLIDER = "SLIDER",
  YES_NO = "YES_NO",
  RANKING = "RANKING"
}



type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly userProfile?: UserProfile | null;
  readonly responses?: (Response | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserProfileId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly userProfile: AsyncItem<UserProfile | undefined>;
  readonly responses: AsyncCollection<Response>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserProfileId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly userId: string;
  readonly age?: number | null;
  readonly sex?: string | null;
  readonly gender?: string | null;
  readonly height?: number | null;
  readonly occupation?: string | null;
  readonly religion?: string | null;
  readonly currentNationality?: string | null;
  readonly countryOfBirth?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly userId: string;
  readonly age?: number | null;
  readonly sex?: string | null;
  readonly gender?: string | null;
  readonly height?: number | null;
  readonly occupation?: string | null;
  readonly religion?: string | null;
  readonly currentNationality?: string | null;
  readonly countryOfBirth?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}

type EagerPoll = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Poll, ['id', 'createdAt']>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly topic: string;
  readonly tags?: (string | null)[] | null;
  readonly createdAt: string;
  readonly questions?: (Question | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyPoll = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Poll, ['id', 'createdAt']>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly topic: string;
  readonly tags?: (string | null)[] | null;
  readonly createdAt: string;
  readonly questions: AsyncCollection<Question>;
  readonly updatedAt?: string | null;
}

export declare type Poll = LazyLoading extends LazyLoadingDisabled ? EagerPoll : LazyPoll

export declare const Poll: (new (init: ModelInit<Poll>) => Poll) & {
  copyOf(source: Poll, mutator: (draft: MutableModel<Poll>) => MutableModel<Poll> | void): Poll;
}

type EagerQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pollId: string;
  readonly content: string;
  readonly questionType: QuestionType | keyof typeof QuestionType;
  readonly options?: (string | null)[] | null;
  readonly required?: boolean | null;
  readonly poll?: Poll | null;
  readonly responses?: (Response | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly pollQuestionsId?: string | null;
  readonly pollQuestionsCreatedAt?: string | null;
}

type LazyQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pollId: string;
  readonly content: string;
  readonly questionType: QuestionType | keyof typeof QuestionType;
  readonly options?: (string | null)[] | null;
  readonly required?: boolean | null;
  readonly poll: AsyncItem<Poll | undefined>;
  readonly responses: AsyncCollection<Response>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly pollQuestionsId?: string | null;
  readonly pollQuestionsCreatedAt?: string | null;
}

export declare type Question = LazyLoading extends LazyLoadingDisabled ? EagerQuestion : LazyQuestion

export declare const Question: (new (init: ModelInit<Question>) => Question) & {
  copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

type EagerResponse = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Response, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly pollId: string;
  readonly questionId: string;
  readonly respondentId: string;
  readonly answer?: string | null;
  readonly createdAt: string;
  readonly respondent?: User | null;
  readonly question?: Question | null;
  readonly updatedAt?: string | null;
}

type LazyResponse = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Response, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly pollId: string;
  readonly questionId: string;
  readonly respondentId: string;
  readonly answer?: string | null;
  readonly createdAt: string;
  readonly respondent: AsyncItem<User | undefined>;
  readonly question: AsyncItem<Question | undefined>;
  readonly updatedAt?: string | null;
}

export declare type Response = LazyLoading extends LazyLoadingDisabled ? EagerResponse : LazyResponse

export declare const Response: (new (init: ModelInit<Response>) => Response) & {
  copyOf(source: Response, mutator: (draft: MutableModel<Response>) => MutableModel<Response> | void): Response;
}