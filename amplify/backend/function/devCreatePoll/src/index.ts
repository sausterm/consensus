import https from 'https';
import { URL } from 'url';

// Set the AWS region (needed for AWS SDK)

/**
 * A function to send a GraphQL mutation to create a poll
 */


export const handler = async (event: any) => {
    const graphqlData = JSON.stringify({
        query: `
            mutation CreatePoll($input: CreatePollInput!) {
                createPoll(input: $input) {
                    id
                    title
                    description
                    topic
                    createdAt
                }
            }
        `,
        variables: {
            input: {
                // Assuming 'title', 'description', and 'topic' are passed in the event
                title: event.title,
                description: event.description,
                topic: event.topic,
                createdAt: new Date().toISOString()
            }
        }
    });

    const graphqlEndpoint = process.env.API_CONSENSUS_GRAPHQLAPIENDPOINT ?? 'https://q7gr6hbkenhqxgqpbcllbiwxke.appsync-api.us-east-1.amazonaws.com/graphql';

    const endpoint = new URL(graphqlEndpoint!).hostname;
    console.log(graphqlEndpoint);
    
    const apiKey = process.env.API_CONSENSUS_GRAPHQLAPIKEY; // If using API Key
    console.log(apiKey);

    const requestOptions = {
        method: 'POST',
        host: endpoint,
        path: '/graphql',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey // Remove this line if not using API Key
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(requestOptions, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve({
                    statusCode: 200,
                    body: JSON.stringify(data)
                });
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(graphqlData);
        req.end();
    });
};
