const AWS = require('aws-sdk');

// AWS SDK Configuration
AWS.config.update({
  region: process.env.AWS_REGION || 'us-east-1', // Use environment variable or default
});

const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const tableName = process.env.POLLS_TABLE || 'PollsTable'; // Use environment variable or default

  try {
    await addPollQuestionToDynamoDB(tableName, event); // event is the poll question
    return { statusCode: 200, body: 'Poll question successfully added to DynamoDB' };
  } catch (error) {
    console.error('Error adding poll question:', error);
    return { statusCode: 500, body: 'Error adding poll question to DynamoDB' };
  }
};

async function addPollQuestionToDynamoDB(tableName, question) {
  const params = {
    TableName: tableName,
    Item: question,
  };
  await ddb.put(params).promise();
  console.log(`Added item to ${tableName}:`, question.id);
}
