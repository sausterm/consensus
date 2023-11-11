

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const https_1 = __importDefault(require("https"));
const url_1 = require("url");
// Set the AWS region (needed for AWS SDK)
/**
 * A function to send a GraphQL mutation to create a poll
 */
const handler = async (event) => {
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
    const endpoint = new url_1.URL(graphqlEndpoint).hostname;
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
        const req = https_1.default.request(requestOptions, (res) => {
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
exports.handler = handler;
