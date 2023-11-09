#!/bin/bash

#chmod +x deploy_inf.sh

#./deploy_inf.sh

#!/bin/bash

# Set AWS credentials


sam build
# Package your application
sam package --output-template-file packaged.yaml --s3-bucket dev-app-infrastructure


# Deploy your SAM application using the packaged template
sam deploy --template-file packaged.yaml --stack-name lambda_code --capabilities CAPABILITY_IAM



sam package --output-template-file packaged.yaml --s3-bucket testbucket-app-dev

