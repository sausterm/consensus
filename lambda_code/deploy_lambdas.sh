#!/bin/bash

#chmod +x deploy_inf.sh

#./deploy_inf.sh

#!/bin/bash

# Set AWS credentials




sam build
# Package your application
sam package --output-template-file packaged.yaml --s3-bucket dev-app-lambda-code


# Deploy your SAM application using the packaged template
sam deploy --template-file packaged.yaml --stack-name lambda-code --capabilities CAPABILITY_IAM


