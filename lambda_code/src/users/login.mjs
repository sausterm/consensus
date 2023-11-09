import { DynamoDBClient, GetItemCommand, QueryCommand } from "@aws-sdk/client-dynamodb";
import bcrypt from 'bcryptjs'; // Import bcrypt at the top

const dbClient = new DynamoDBClient({ region: "us-east-1" });

const handler = async (event, context) => {
    let body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;

    console.log('Body:', body); // Debugging line
    
    let identity = body.identity;
    let password = body.password;

    if (!identity || !password) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Please provide your identity field and password.'
            })
        };
    }

    return await getUser(identity, password);
};

const getUser = async (identity, password) => {
    const params = {
        TableName: 'Users',
        IndexName: 'identity-index',
        KeyConditionExpression: '#id = :identity',
        ExpressionAttributeValues: {
            ':identity': { S: identity },
        },
        ExpressionAttributeNames: {
            '#id': 'identity',
        },
    };

    try {
        let command = new QueryCommand(params);

        let data = await dbClient.send(command);

        if (!data.Items || !data.Items.length) {
            throw new Error(`No user found`);
        }

        let user = data.Items[0];

        if (!user.password || !user.password.S) {
            throw new Error('No password defined for this user');
        }

        const passwordIsCorrect = await bcrypt.compare(password, user.password.S);
        if (!passwordIsCorrect) {
            throw new Error('Password is incorrect');
        }
        
        

        if (!user.identity || !user.identity.S) {
            throw new Error('No identity field defined for this user');
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Logged in successfully',
                identity: user.identity.S
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: error.message
            })
        };
    }
};

export { handler };
