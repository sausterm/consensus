import React, { useEffect, useState } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import Poll from 'components/modules/Poll';
import { listPolls, listQuestions } from '../../graphql/queries';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<any | null>(null);
    const [polls, setPolls] = useState<any[]>([]);

    // Function to fetch questions for a given poll
    const fetchQuestionsForPoll = async (pollId) => {
        console.log("Fetching questions for pollId:", pollId);
        try {
          const questionsData = await API.graphql(graphqlOperation(listQuestions, {
            pollId,  // Directly pass pollId here
            limit: 10
          }));
          console.log("Questions data received:", questionsData);
          return questionsData.data.listQuestions.items;
        } catch (error) {
          console.error('Error fetching questions for poll:', error);
          return [];
        }
      };
      
      
      

    useEffect(() => {
        const fetchUserAndPolls = async () => {
            try {
                const pollData = await API.graphql(graphqlOperation(listPolls));
                let fetchedPolls = pollData.data.listPolls.items;

                // Fetch questions for each poll
                for (let poll of fetchedPolls) {
                    const questionsForThisPoll = await fetchQuestionsForPoll(poll.id);
                    poll.questions = questionsForThisPoll;
                    console.log("Questions for poll", poll.id, ":", questionsForThisPoll);
                }
  


                console.log("Fetched POLLS before setting state: ", JSON.stringify(fetchedPolls, null, 2));
                setPolls([]); // Clear existing polls before setting new ones
                setPolls(fetchedPolls);

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
            navigate('/login');
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
            </section>

            {polls.map(poll => (
                    <Poll key={poll.id} title={poll.title} questions={poll.questions || []} />
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
