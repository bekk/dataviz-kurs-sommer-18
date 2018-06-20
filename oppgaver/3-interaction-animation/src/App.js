import React, { Component } from 'react';
import './App.css';
import InteractionAnimation from './InteractionAnimation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    }
  }

  render() {
    const data = [
      {name: "a"}, 
      {name: "b"}, 
      {name: "c"}, 
      {name: "e"}, 
      {name: "f"}, 
      {name: "g"}, 
      {name: "h"}, 
      {name: "i"}, 
      {name: "j"},
      {name: "k"},
      {name: "l"},
      {name: "m"}
    ];

    return (
      <div className="App">
        <div className="App-header">
          <h1>Interaction & animation</h1>
        </div>
        <div>
          <InteractionAnimation data={data} size={[800, 500]} />
        </div>
      </div>
    );
  }
}

export default App;
