import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';



// Inside your component render:


function Registration() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleRegistration = async () => {
    console.log("Button clicked!"); // Check if the function is being invoked
    try {
      const result = await Auth.signUp({
        username,
        password,
        attributes: {
            email
        }
      });
      console.log("Registration result:", result); 
      navigate('/confirm-signup');  // Check the result of the registration
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

 

  
  return (
    <div>
      <h2>Registration</h2>
      <input
        type="text"
        placeholder="Phone Number"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       <input
    type="text"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
/>


      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default Registration;
