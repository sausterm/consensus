"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const https_1 = __importDefault(require("https"));
const url_1 = require("url");
console.log("TEST");
const handler = async (event) => {
    console.log('Received event:', JSON.stringify(event));
    // Validate the event structure and required fields
    if (!event.title || !event.description || !event.topic || !event.questions) {
        console.error('Missing required fields in the event');
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Invalid input" })
        };
    }
    // Create the poll
    let createPollData = await createGraphqlOperation(`
        mutation CreatePoll($input: CreatePollInput!) {
            createPoll(input: $input) {
                id
                createdAt
            }
        }
    `, {
        input: {
            title: event.title,
            description: event.description,
            topic: event.topic,
            tags: event.tags,
            createdAt: new Date().toISOString()
        }
    });
    console.log('CreatePoll Response:', JSON.stringify(createPollData));
    // Check if poll creation was successful
    if (!createPollData.data || !createPollData.data.createPoll) {
        console.error('Failed to create poll');
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Poll creation failed" })
        };
    }
    const pollId = createPollData.data.createPoll.id;
    const pollCreatedAt = createPollData.data.createPoll.createdAt;
    console.log('QUESTIONS: ', event.questions);
    // Process each question
    if (event.questions && event.questions.length) {
        for (let question of event.questions) {
            const questionType = mapInputTypeToQuestionType(question.QuestionType);
            let createQuestionResponse = await createGraphqlOperation(`
                mutation CreateQuestion($input: CreateQuestionInput!) {
                    createQuestion(input: $input) {
                        id
                    }
                }`, {
                input: {
                    pollId: pollId,
                    pollCreatedAt: pollCreatedAt,
                    content: question.content,
                    questionType,
                    options: question.options,
                    required: question.required,
                }
            });
            console.log(`CreateQuestion Response for question ID ${question.id}:`, JSON.stringify(createQuestionResponse));
            // Check if question creation was successful
            if (!createQuestionResponse.data || !createQuestionResponse.data.createQuestion) {
                console.error(`Failed to create question for question ID ${question.id}`);
            }
        }
    }
    else {
        console.log('No questions to process');
    }
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Poll and questions created successfully",
            pollId: pollId
        })
    };
};
exports.handler = handler;
// Rest of the function remains the same
function mapInputTypeToQuestionType(questionType) {
    switch (questionType) {
        case 'MULTIPLE_CHOICE':
            return 'MULTIPLE_CHOICE';
        case 'YES_NO':
            return 'YES_NO';
        case 'SLIDER':
            return 'SLIDER';
        case 'TEXT':
            return 'TEXT';
        // Add other mappings as necessary
        default:
            return 'TEXT'; // Handle unknown types
    }
}
async function createGraphqlOperation(query, variables) {
    const graphqlData = JSON.stringify({ query, variables });
    const graphqlEndpoint = process.env.API_CONSENSUS_GRAPHQLAPIENDPOINT ?? 'https://q7gr6hbkenhqxgqpbcllbiwxke.appsync-api.us-east-1.amazonaws.com/graphql';
    const endpoint = new url_1.URL(graphqlEndpoint).hostname;
    const apiKey = process.env.API_CONSENSUS_GRAPHQLAPIKEY;
    const requestOptions = {
        method: 'POST',
        host: endpoint,
        path: '/graphql',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        }
    };
    return new Promise((resolve, reject) => {
        const req = https_1.default.request(requestOptions, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        });
        req.on('error', (error) => {
            reject(error);
        });
        req.write(graphqlData);
        req.end();
    });
}
