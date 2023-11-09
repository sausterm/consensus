import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import AWS from 'aws-sdk';
// Set the AWS region from the environment variable
const awsRegion = process.env.REACT_APP_AWS_REGION;

if (!awsRegion) {
    throw new Error('AWS region is not defined');
}

// Configure AWS SDK with the region
console.log("AWS Region from Env:", process.env.REACT_APP_AWS_REGION);

AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY!
  }
});
//AWS.config.update({ region: "us-east-1" });  // Replace with your region

// Rest of your AWS SDK code


const ddb = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

function ConfirmSignUp() {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState(''); // This is the username the user registered with
  const [code, setCode] = useState(''); // Code from the email

  const handleConfirmation = async () => {
    console.log('Attempting Confirmation!');
    try {
      await Auth.confirmSignUp(username, code);

      console.log('Confirmation successful!');

      const tablearn = process.env.REACT_APP_USERS_TABLE_ARN
      

      // Define the new user object
      const tableName = process.env.REACT_APP_USERS_TABLE_NAME;

      if (!tableName) {
        throw new Error('TableName is not defined');
      }

       
      console.log("tableName",tableName);
      console.log("username",username);

      const newUserInput = {
        TableName: tableName,
         // This ensures TableName is a string
        Item: {
          user_id: username// Replace with your actual user id value
          // ... add other user attributes here
        }
      };


      // Call DynamoDB to add the item to the table
      ddb.put(newUserInput, function(err: any, data: any) {
        if (err) {
          console.error("Error adding user to UsersTable:", JSON.stringify(err, null, 2));
        } else {
          console.log("Added user to UsersTable:", JSON.stringify(data, null, 2));
        }
      });
      
      // Here you can redirect the user to the login page or anywhere else you prefer
    } catch (error) {
      console.error('Error confirming sign up', error);
    }
  };

  const handleResendCode = async () => {
    try {
      await Auth.resendSignUp(username);
      console.log('Code resent successfully!');
    } catch (err) {
      console.error('Error resending code: ', err);
    }
  };

  return (
    <div>
      <h2>Confirm Registration</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Verification Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleConfirmation}>Confirm</button>
      <button onClick={handleResendCode}>Resend Verification Code</button>
    </div>
  );
}

export default ConfirmSignUp;
