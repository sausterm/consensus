import React from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from './amplify/aws-exports.js'; // adjust the path if needed

import PrivateRoute from './components/auth/PrivateRoute';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AuthenticatedWrapper from './components/auth/AuthenticatedWrapper';

import Registration from './components/pages/Registration';
import Login from './components/pages/Login';
import ConfirmSignUp from './components/auth/ConfirmSignUp'; // Ensure correct path


import Home from './components/pages/Home';

Amplify.configure(awsconfig);


function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />

        <Route path="/register" element={<Registration />} />
        <Route path="/confirm-registration" element={<ConfirmSignUp />} />

        
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
