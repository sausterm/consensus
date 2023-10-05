import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

type AuthenticatedWrapperProps = {
    children: React.ReactNode;
  };
  
  
const AuthenticatedWrapper: React.FC<AuthenticatedWrapperProps> = ({ children }) => {
const navigate = useNavigate();
const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(null);

React.useEffect(() => {
    const checkAuthState = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        navigate('/login');
      }
    };

    checkAuthState();
  }, [navigate]);

  if (isAuthenticated === null) return null; // or a loading spinner

  return <>{isAuthenticated ? children : null}</>;
};

export default AuthenticatedWrapper;
