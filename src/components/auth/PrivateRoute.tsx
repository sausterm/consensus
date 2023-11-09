import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const PrivateRoute: React.FC<{
  children: React.ReactNode;
  path: string;
}> = ({ children, path }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(
    null
  );

  React.useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  // While checking authentication state, render null (or a loading spinner)
  if (isAuthenticated === null) return null;

  return isAuthenticated ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
