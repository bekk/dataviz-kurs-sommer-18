import React, { Component } from 'react';
import './App.css';
import Table from './Table';

class App extends Component {
  render() {
    const data = [
      {name: "diamond", hardness: 10, color: "white"},
      {name: "ruby", hardness: 9, color: "red"},
      {name: "sapphire", hardness: 9, color: "blue"},
      {name: "topaz", hardness: 8, color: "yellow"},
      {name: "emerald", hardness: 7.5, color: "green"},
      {name: "amethyst", hardness: 7, color: "purple"},
      {name: "opal", hardness: 6, color: "black"},
    ];

    return (
      <div className="App">
        <div className="App-header">
          <h1>Table</h1>
        </div>
        <div>
          <Table data={data} />
        </div>
      </div>
    );
  }
}

export default App;
