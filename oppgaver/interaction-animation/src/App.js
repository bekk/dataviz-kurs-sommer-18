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
      {name: "a", value: 5}, 
      {name: "b", value: 10}, 
      {name: "c", value: 1}, 
      {name: "e", value: 3}, 
      {name: "f", value: 2}, 
      {name: "g", value: 1}, 
      {name: "h", value: 4}, 
      {name: "i", value: 2}, 
      {name: "j", value: 7}
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
