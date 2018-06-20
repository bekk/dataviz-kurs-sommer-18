import React, { Component } from "react";
import "./App.css";
import { select } from "d3-selection";
import { transition } from "d3-transition";

export default class Interaction extends Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
  }

  componentDidMount() {
    this.create();
  }

  componentDidUpdate() {
    this.create();
  }

  create() {
    const data = this.props.data;
    const svg = this.ref;
    const width = this.props.size[0];
    const height = this.props.size[1];

    // ENTRY POINT FOR D3
  }

  render() {
    return <svg ref={ref => (this.ref = ref)} 
      width={this.props.size[0]} 
      height={this.props.size[1]} />
  }
}
