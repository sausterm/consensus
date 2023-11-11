// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const QuestionType = {
  "TEXT": "TEXT",
  "MULTIPLE_CHOICE": "MULTIPLE_CHOICE",
  "CHECKBOX": "CHECKBOX",
  "SLIDER": "SLIDER",
  "YES_NO": "YES_NO",
  "RANKING": "RANKING"
};

const { User, UserProfile, Poll, Question, Response } = initSchema(schema);

export {
  User,
  UserProfile,
  Poll,
  Question,
  Response,
  QuestionType
};