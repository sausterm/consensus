import React from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports'; // adjust the path if needed



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import ConfirmSignUp from './components/ConfirmSignUp'; // Ensure correct path



Amplify.configure(awsconfig);


function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />

        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirm-signup" element={<ConfirmSignUp />} />
        
      </Routes>

      </div>
    </Router>
  );
}


export default App;
