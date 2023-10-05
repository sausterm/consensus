import React from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports'; // adjust the path if needed


import PrivateRoute from './components/PrivateRoute';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AuthenticatedWrapper from './components/AuthenticatedWrapper';

import Registration from './components/Registration';
import Login from './components/Login';
import ConfirmSignUp from './components/ConfirmSignUp'; // Ensure correct path


import Home from './components/Home';

Amplify.configure(awsconfig);


function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />

        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={
          <AuthenticatedWrapper>
            <Home />
          </AuthenticatedWrapper>
        } />


        
      </Routes>

      </div>
    </Router>
  );
}


export default App;
