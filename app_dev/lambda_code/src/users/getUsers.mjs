var AWS = require('aws-sdk');

exports.handler = async (event) => {
    // Create a new instance of the DynamoDB service object
    const db = new AWS.DynamoDB.DocumentClient();

    // Check if userId is provided
    if (!event.queryStringParameters || !event.queryStringParameters.userID) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'userID must be provided' }),
        };
    }

    // Parse the ID from the path parameters
    const requestedUserID = parseInt(event.queryStringParameters.userID, 10);


    // Set up parameters for DynamoDB request
    const params = {
        TableName: 'Users',
        Key: {
            'userID': requestedUserID
        }
    };

    try {
        // Make DynamoDB request
        const response = await db.get(params).promise();

        // Check if user is found
        if (!response.Item) {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'User not found' }),
            };
        }

        // Return a 200 response if the DynamoDB request was successful
        return {
            statusCode: 200,
            body: JSON.stringify(response.Item),
        };
    } catch (error) {
        // Return a 500 response if something goes wrong
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Could not fetch user' }),
        };
    }
};
