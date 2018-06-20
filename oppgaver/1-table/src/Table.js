import React, { Component } from "react";
import "./App.css";
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { select } from "d3-selection";
import { axisLeft } from "d3-axis";
import { format } from "d3-format";

export default class Table extends Component {
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
    const table = this.ref;
    const data = this.props.data;
    const numberFormat = format(".1f");

    const headerTR = select(table)
      .append("tr");

    headerTR
      .append("th")
      .text("Name");

    headerTR
      .append("th")
      .text("Hardness");

    headerTR
      .append("th")
      .text("Color");

    const dataTR = select(table)
      .selectAll("tr")
      .data(data)
      .enter()
      .append("tr");

    dataTR
      .append("td")
      .text((d, i) => d.name);

    dataTR
      .append("td")
      .attr("class", "number")
      .text((d, i) => numberFormat(d.hardness));

    dataTR
      .append("td")
      .attr("style", (d, i) => `color: ${d.color}`)
      .text((d, i) => d.color);
  }

  render() {
    return <table ref={ref => (this.ref = ref)} />;
  }
}
