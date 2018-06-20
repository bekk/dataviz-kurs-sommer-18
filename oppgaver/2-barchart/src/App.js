import React, { Component } from 'react';
import './App.css';
import BarChart from './BarChart';

class App extends Component {
  render() {
    const data = [5, 10, 1, 3, 2, 1, 4, 2, 7];

    return (
      <div className="App">
        <div className="App-header">
          <h1>Bar chart</h1>
        </div>
        <div>
          <BarChart data={data} size={[500, 500]} />
        </div>
      </div>
    );
  }
}

export default App;
