const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
    try {
        // Parse the request body
        const requestBody = JSON.parse(event.body);

        // Generate a unique timestamp-based ID
        const timestamp = Date.now().toString();
        const user_id = `user_${timestamp}`;

        // Prepare the item to be saved in the database
        const item = {
            user_id: user_id,
            name: requestBody.name,
            password: requestBody.password,
            phone: requestBody.phone,  // phone number doesn't have case, no need to convert
        };

        // Convert email and username to lowercase before storing
        if (requestBody.email) {
            item.email = requestBody.email.toLowerCase();
        }

        if (requestBody.username) {
            item.username = requestBody.username.toLowerCase();
        }

        // Define the parameters for the DynamoDB put operation
        const params = {
            TableName: 'users_dev',
            Item: item,
            ConditionExpression: 'attribute_not_exists(email) AND attribute_not_exists(phone) AND attribute_not_exists(username)'
        };
        
        // Save the item to the database
        await dynamoDB.put(params).promise();

        // Return a success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'User created successfully', user_id: user_id })
        };
    } catch (error) {
        // If error is due to condition expression
        if (error.code === 'ConditionalCheckFailedException') {
            return {
                statusCode: 409,
                body: JSON.stringify({ message: 'User with this email, phone, or username already exists' })
            };
        }
        // Return an error response
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to create user', error: error.message })
        };
    }
};
