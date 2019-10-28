import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Main from './components/Main'

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default () => (
  <Router><App /></Router>
)
