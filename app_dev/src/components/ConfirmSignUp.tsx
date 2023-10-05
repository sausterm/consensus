import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

function ConfirmSignUp() {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState(''); // This is the username the user registered with
  const [code, setCode] = useState(''); // Code from the email

  const handleConfirmation = async () => {
    try {
      await Auth.confirmSignUp(username, code);
      console.log('Confirmation successful!');
      navigate('/login'); 
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
