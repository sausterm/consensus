// TestRouter.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function TestRouter() {
  return (
    <Router>
      <div>
        <p>Test Router</p>
        <Routes>
          <Route path="/test" element={<div>Hello from Test Route!</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default TestRouter;
