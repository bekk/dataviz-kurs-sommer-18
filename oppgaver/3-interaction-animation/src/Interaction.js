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

    const color = (d, i) => `hsl(32, 100%, 60%)`
    const colorHover = (d, i) => `hsl(32, 100%, 80%)`
    const widthCount = 4;
    const xCoord = (d, i) => 120 + (i%widthCount * 60);
    const yCoord = (d, i) => height/2 + (Math.floor(i/widthCount) * 60);

    function handleMouseOver(d, i) {
      select(this)
        .transition()
        .duration(100)
        .attr("r", 30)
        .style("fill", colorHover)

      select(svg)
        .append("text")
        .text(d.name)
        .attr("x", xCoord(d, i) + 30)
        .attr("y", yCoord(d, i) - 30)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("id", `text_${d.name}`)
    }

    function handleMouseOut(d, i) {
      select(this)
        .transition()
        .duration(500)
        .attr("r", 25)
        .style("fill", color)

      select(`#text_${d.name}`).remove();
    }

    const circles = select(svg)
      .selectAll("circle")
      .data(data, (d) => d.name);

    circles
      .enter()
      .append("circle")
      .style("fill", color)
      .attr("cx", xCoord)
      .attr("cy", yCoord)
      .attr("r", 25)
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);
  }

  render() {
    return <svg ref={ref => (this.ref = ref)} 
      width={this.props.size[0]} 
      height={this.props.size[1]} />
  }
}
