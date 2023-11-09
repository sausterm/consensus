#!/bin/bash

#chmod +x deploy_inf.sh

#./deploy_inf.sh

#!/bin/bash

# Set AWS credentials
export AWS_ACCESS_KEY_ID=AKIAQIEYXCMYTXH5MUPQ
export AWS_SECRET_ACCESS_KEY=vpElqVhkyMmLbX71g9wdi94tVXi5Z3ThBYEyzdGG
export AWS_DEFAULT_REGION=us-east-1




sam build
# Package your application
sam package --output-template-file packaged.yaml --s3-bucket dev-app-lambda-code


# Deploy your SAM application using the packaged template
sam deploy --template-file packaged.yaml --stack-name lambda-code --capabilities CAPABILITY_IAM


