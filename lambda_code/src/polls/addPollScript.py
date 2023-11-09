import { DynamoDBClient } from "@aws-sdk/client-dynamodb/dist/cjs/DynamoDBClient.js";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb/dist/cjs/DynamoDBDocument.js";

const ddbClient = new DynamoDBClient({ region: process.env.AWS_REGION || 'us-east-1' });
const ddb = DynamoDBDocumentClient.from(ddbClient);


//update code

export async function handler(event) {
  const tableName = process.env.POLLS_TABLE || 'PollsTable';

  try {
    await addPollQuestionToDynamoDB(tableName, event);
    return { statusCode: 200, body: 'Poll question successfully added to DynamoDB' };
  } catch (error) {
    console.error('Error adding poll question:', error);
    return { statusCode: 500, body: 'Error adding poll question to DynamoDB' };
  }
}

async function addPollQuestionToDynamoDB(tableName, question) {
  const params = {
    TableName: tableName,
    Item: question,
  };
  await ddb.put(params).promise();
  console.log(`Added item to ${tableName}:`, question.id);
}
