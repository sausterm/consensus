import https from 'https';
import { URL } from 'url';

interface PollResponse {
  data: {
    createPoll: {
      id: string;
    };
  };
}


interface GraphqlOperationResponse {
  data: any;
}  


console.log("TEST");


export const handler = async (event: any) => {
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
                }`, 
                {
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
    } else {
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


// Rest of the function remains the same
function mapInputTypeToQuestionType(questionType:string) {
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



async function createGraphqlOperation(query: string, variables: any): Promise<GraphqlOperationResponse> {
    const graphqlData = JSON.stringify({ query, variables });

    const graphqlEndpoint = process.env.API_CONSENSUS_GRAPHQLAPIENDPOINT ?? 'https://q7gr6hbkenhqxgqpbcllbiwxke.appsync-api.us-east-1.amazonaws.com/graphql';
    const endpoint = new URL(graphqlEndpoint).hostname;
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
        const req = https.request(requestOptions, (res) => {
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
