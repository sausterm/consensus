// src/components/Home.tsx
import React from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';


const Home: React.FC = () => {
    const navigate = useNavigate();
  
    const handleLogout = async () => {
      try {
        await Auth.signOut();
        navigate('/login'); // Redirect to the login page after successful logout
      } catch (error) {
        console.error('Error during logout', error);
      }
    };
  
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>You are now logged in!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  

export default Home;
