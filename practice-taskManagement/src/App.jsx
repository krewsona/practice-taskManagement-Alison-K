import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <h1 className='task-container'>My Tasks</h1>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:taskId" element={<TaskDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};


const NotFound = () => (
  <div>
    <h2>Error - Not Found</h2>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);


export default App