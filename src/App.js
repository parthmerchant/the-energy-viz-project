import React, { Component } from 'react';
import Landing from './components/Landing/Landing';
import Sectors from './components/Sectors/Sectors';
import Sectors_Small_Multiples from './components/Sectors_Small_Multiples/Sectors_Small_Multiples';
import Census_Small_Multiples from './components/Census_Small_Multiples/Census_Small_Multiples';
import Energy_Economy_Scatterplot from './components/Energy_Economy_Scatterplot/Energy_Economy_Scatterplot';
import Energy_Economy_Scatterplot_Small_Multiples from './components/Energy_Economy_Scatterplot_Small_Multiples/Energy_Economy_Scatterplot_Small_Multiples';
import './App.css';


class App extends Component {

  render() {
      return (
          <div className="App">
              <Landing />
              <Sectors />
              <hr></hr>
              <Sectors_Small_Multiples />
              <hr></hr>
              <Census_Small_Multiples />
              <hr></hr>
              <Energy_Economy_Scatterplot />
              <hr></hr>
              <Energy_Economy_Scatterplot_Small_Multiples />
          </div>
      );
  }
};

export default App;
