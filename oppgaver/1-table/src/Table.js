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

    // ENTRY POINT FOR D3
  }

  render() {
    return <table ref={ref => (this.ref = ref)} />; // Den rare ref-attributt-koden er en måte å sende en referanse til DOM-elementet til tabellen inn i react-land
  }
}
