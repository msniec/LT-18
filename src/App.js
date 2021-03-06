import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import questions from './questions';
import colors from './colors';

function App() {
  return (
    <Router basename="/" >
      <div>
        <Route exact path="/" component={questions} />
        <Route path="/result/:id" component={colors} />
      </div>
    </Router>
  );
}

export default App;
