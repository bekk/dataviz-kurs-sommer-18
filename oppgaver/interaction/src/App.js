import React, { Component } from 'react';
import './App.css';
import Interaction from './Interaction';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    }
  }

  render() {
    const data = [
      {name: "a", connections: ["b", "c"]}, 
      {name: "b", connections: []}, 
      {name: "c", connections: ["e"]}, 
      {name: "e", connections: []}, 
      {name: "f", connections: ["c", "a", "h"]}, 
      {name: "g", connections: []}, 
      {name: "h", connections: []}, 
      {name: "i", connections: ["j"]}, 
      {name: "j", connections: []},
      {name: "k", connections: []},
      {name: "l", connections: []},
      {name: "m", connections: []}
    ];


    return (
      <div className="App">
        <div className="App-header">
          <h1>Interaction</h1>
        </div>
        <div>
          <Interaction data={data} size={[800, 500]} />
        </div>
      </div>
    );
  }
}

export default App;
