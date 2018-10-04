import React, { Component } from 'react';
import './App.css';
import Toolbar from './toolbar';
import FoodNameButtons from './foodNameButtons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <FoodNameButtons />
      </div>
    );
  }
}

export default App;
