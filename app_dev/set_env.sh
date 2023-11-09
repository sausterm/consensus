
# RUN 
# chmod +x set_env.sh
# ./set_env.sh

#
#App-dev-nov-2023 key 
#Access key:  AKIAQIEYXCMYYTYUMEPF
#secret key: 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

#admin

AWS_DEFAULT_REGION=us-east-1
export AWS_ACCESS_KEY_ID=AKIAQIEYXCMYVALA5Z5B
export AWS_SECRET_ACCESS_KEY=raIN98d7qZbWbJ8nItlsvNyYRxsxNabsqI24atS0

# Replace YOUR_STACK_NAME with the actual name of your stack.
outputs=$(aws cloudformation describe-stacks --stack-name infrastructure --query 'Stacks[0].Outputs')

# Capture the ARNs from the CloudFormation outputs
users_table_arn=$(echo $outputs | jq -r '.[] | select(.OutputKey == "UsersTableArn") | .OutputValue')
polls_table_arn=$(echo $outputs | jq -r '.[] | select(.OutputKey == "PollsTableArn") | .OutputValue')
responses_table_arn=$(echo $outputs | jq -r '.[] | select(.OutputKey == "ResponsesTableArn") | .OutputValue')




# Set the environment variables for ARNs
export USERS_TABLE_ARN=$users_table_arn
export POLLS_TABLE_ARN=$polls_table_arn
export RESPONSES_TABLE_ARN=$responses_table_arn

# Extract table names from ARNs
USERS_TABLE_NAME=$(echo $USERS_TABLE_ARN | rev | cut -d'/' -f1 | rev)
POLLS_TABLE_NAME=$(echo $POLLS_TABLE_ARN | rev | cut -d'/' -f1 | rev)
RESPONSES_TABLE_NAME=$(echo $RESPONSES_TABLE_ARN | rev | cut -d'/' -f1 | rev)

# Set the environment variables for table names
export USERS_TABLE_NAME=$USERS_TABLE_NAME
export POLLS_TABLE_NAME=$POLLS_TABLE_NAME
export RESPONSES_TABLE_NAME=$RESPONSES_TABLE_NAME

# Write the environment variables to a .env file
echo "REACT_APP_USERS_TABLE_ARN=$users_table_arn" > .env
echo "REACT_APP_POLLS_TABLE_ARN=$polls_table_arn" >> .env
echo "REACT_APP_RESPONSES_TABLE_ARN=$responses_table_arn" >> .env
echo "REACT_APP_USERS_TABLE_NAME=$USERS_TABLE_NAME" >> .env
echo "REACT_APP_POLLS_TABLE_NAME=$POLLS_TABLE_NAME" >> .env
echo "REACT_APP_RESPONSES_TABLE_NAME=$RESPONSES_TABLE_NAME" >> .env


