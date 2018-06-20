import React, { Component } from "react";
import "./App.css";
import { transition } from "d3-transition";
import { select } from "d3-selection";

export default class DynamicData extends Component {
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

  updateChart(data) {
    // ENTRY POINT FOR D3
  }

  create() {
    const data = this.props.data;
    this.svg = this.ref;
    this.width = this.props.size[0];
    this.height = this.props.size[1];

    this.updateChart(data);

    let counter = 0;

    const updateData = () => {
      const push = Math.random() < 0.5;
      const verdi = Math.floor(Math.random() * 10);
      const index = Math.floor(Math.random() * data.length);

      const min = 4;
      const max = 12;

      const action = Math.random() < 0.5
        ? "change" 
        : ((data.length <= min || data.length <= max && Math.random() < 0.5)
          ? "push"
          : "pop");

      const dataAsString = data.map((e) => `${e.name}:${e.value}`).join(" ");

      console.log(`updateData ${action} index=${index} verdi=${verdi} \n${dataAsString}`)

      if (action == "change") {
        data[index].value = verdi;
      } else if (action == "push") {
        const navn = "x" + counter++;
        data.splice(index, 0, {name: navn, value: verdi});
      } else if (action == "pop") {
        data.splice(index, 1);
      }

      this.updateChart(data);
    }

    window.setInterval(updateData, 500);
  }

  render() {
    return <svg ref={ref => (this.ref = ref)} 
      width={this.props.size[0]} 
      height={this.props.size[1]} />
  }
}
