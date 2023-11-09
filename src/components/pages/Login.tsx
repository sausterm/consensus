import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await Auth.signIn(username, password);
      navigate('/home'); // Redirect to the Home page after successful login
    } catch (error) {
      console.error('Error during login', error);
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username or Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;

