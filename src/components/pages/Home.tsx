// src/components/Home.tsx
import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import Poll from 'components/modules/Poll';
import { API, graphqlOperation } from 'aws-amplify';

import { listPolls } from '../../graphql/queries';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<any | null>(null);
    const [polls, setPolls] = useState<any[]>([]);

    useEffect(() => {
        const fetchUserAndPolls = async () => {
            try {
                const pollData = await API.graphql(graphqlOperation(listPolls));
                const polls = pollData.data.listPolls.items;

                console.log("POLLS: ", polls);
                setPolls(polls);
            } catch (error) {
                console.error('Error fetching polls', error);
            }

            try {
                const currentUser = await Auth.currentAuthenticatedUser();
                setUser(currentUser);
            } catch (error) {
                console.error('Error fetching user', error);
                navigate('/login');
            }
        };

        fetchUserAndPolls();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await Auth.signOut();
            navigate('/login'); // Redirect to the login page after successful logout
        } catch (error) {
            console.error('Error during logout', error);
        }
    };

    return (
        <div className="dashboard">
            <h1>Welcome to the Home Page, {user ? user.username : 'User'}</h1>
            <section className="profile-section">
                <h2>Your Profile:</h2>
                <p><strong>Username:</strong> {user ? user.username : 'Fetching...'}</p>
                {/* You can add more attributes here as you have them in the user object */}
            </section>

            {polls.map(poll => (
                <Poll key={poll.id} questions={poll.questions || []} />
            ))}

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};


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
