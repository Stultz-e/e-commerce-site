import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1> Hats PAGE </h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
          <Route path='/' component={HomePage} />
      </div>
    );
  }
}

export default App;
