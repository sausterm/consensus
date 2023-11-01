// src/components/Home.tsx
import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import Poll from 'components/modules/Poll';




const Home: React.FC = () => {
  
  const navigate = useNavigate();
  const [user, setUser] = useState<any | null>(null);

  const pollQuestions = [
    {
      id: 'question1',
      label: 'How did you hear about us?',
      questionType: 'single', // for example purposes, define the types as per your Poll component logic
      inputType: 'text',
      required: true,
    },
    // Add more questions as needed
  ];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
        
      } catch (error) {
        console.error('Error fetching user', error);
        navigate('/login'); 
      }
    };
    
    fetchUser();
    
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      navigate('/login'); // Redirect to the login page after successful logout
    } catch (error) {
      console.error('Error during logout', error);
    }
  };

  console.log(user)

  return (
    <div className="dashboard">
      <h1>Welcome to the Home Page, {user ? user.username : 'User'}</h1>
      <section className="profile-section">
        <h2>Your Profile:</h2>
        <p><strong>Username:</strong> {user ? user.username : 'Fetching...'}</p>
        {/* You can add more attributes here as you have them in the user object */}
      </section>


      <Poll questions={pollQuestions} />


      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

// Some simple styles for the dashboard layout
const dashboardStyles: React.CSSProperties = {
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px'
};

const profileSectionStyles: React.CSSProperties = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  width: '100%',
  maxWidth: '400px'
};

export default Home;
