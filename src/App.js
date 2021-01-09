import React, { Component } from 'react';
import Landing from './components/Landing/Landing';
import Sectors from './components/Sectors/Sectors';
import Sectors_Small_Multiples from './components/Sectors_Small_Multiples/Sectors_Small_Multiples';
import './App.css';

class App extends Component {

  render() {
      return (
          <div className="App">
              <Landing />
              <Sectors />
              <Sectors_Small_Multiples />
          </div>
      );
  }
};

export default App;
