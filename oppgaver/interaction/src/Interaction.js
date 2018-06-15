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

  updateChart(data) {
    console.log("updateChart");

    const color = (d, i) => `hsl(32, 100%, 60%)`
    const colorHover = (d, i) => `hsl(32, 100%, 80%)`
    const widthCount = 4;
    const xCoord = (d, i) => 120 + (i%widthCount * 60);
    const yCoord = (d, i) => this.height/2 + (Math.floor(i/widthCount) * 60);

    const svg = this.svg;

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

    const circles = select(this.svg)
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

  create() {
    console.log("create");

    const data = this.props.data;
    this.svg = this.container;
    this.width = this.props.size[0];
    this.height = this.props.size[1];
    
    this.svg.setAttribute("width", this.width);
    this.svg.setAttribute("height", this.height);

    this.updateChart(data);
  }

  render() {
    console.log("render")
    return <svg ref={container => (this.container = container)} />
  }
}
