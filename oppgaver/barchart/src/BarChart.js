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
    const node = this.node;
    const dataMax = max(this.props.data);
    const width = this.props.size[0];
    const height = this.props.size[1];

    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, height]);

    select(node)
      .style("background-color", "#d1d1d1")
      .style("padding", "2rem 4rem");

    select(node)
      .selectAll("rect")
      .data(this.props.data)
      .enter()
      .append("rect");

    select(node)
      .selectAll("rect")
      .data(this.props.data)
      .exit()
      .remove();

    const barWidth = 50;
    const barMargin = 5;

    select(node)
      .selectAll("rect")
      .data(this.props.data)
      .style("fill", (d, i) => i % 2 ? "#3d3d3d" : "#fe9922")
      .attr("x", (d, i) => i * (barWidth + barMargin))
      .attr("y", d => height - yScale(d))
      .attr("height", d => yScale(d))
      .attr("width", barWidth);

    const yScaleInverted = yScale.copy().range([height, 0]);
    const yAxis = axisLeft(yScaleInverted);

    select(node)
      .append("g")
        .attr("transform", `translate(${-barMargin}, 0)`)
        .call(yAxis);
  }

  render() {
    return <svg ref={node => (this.node = node)} 
      width={this.props.size[0]} 
      height={this.props.size[1]} />;
  }
}
export default BarChart;
