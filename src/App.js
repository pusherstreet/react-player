import React, { Component } from 'react';
import './App.css';
import PLayer from './components/Player';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <PLayer />
        </div>
      </div>
    );
  }
}

export default App;
