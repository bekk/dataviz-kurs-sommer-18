import React, { Component } from "react";
import "./App.css";
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { select } from "d3-selection";
import { axisLeft } from "d3-axis";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }

  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart() {
    const svg = this.ref;
    const dataMax = max(this.props.data);
    const width = this.props.size[0];
    const height = this.props.size[1];

    // ENTRY POINT FOR D3
  }

  render() {
    return <svg ref={ref => (this.ref = ref)} 
      width={this.props.size[0]} 
      height={this.props.size[1]} />;
  }
}
export default BarChart;
