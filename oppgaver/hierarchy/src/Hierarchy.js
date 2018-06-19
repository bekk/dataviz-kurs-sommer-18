import React, { Component } from "react";
import "./App.css";
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { select } from "d3-selection";
import { axisLeft } from "d3-axis";
import { hierarchy, pack } from "d3-hierarchy";

export default class Hierarchy extends Component {
  constructor(props) {
    super(props);
    this.createHierarchy = this.createHierarchy.bind(this);
  }

  componentDidMount() {
    this.createHierarchy();
  }

  componentDidUpdate() {
    this.createHierarchy();
  }

  createHierarchy() {
    const svg = this.svg;
    const width = this.props.size[0];
    const height = this.props.size[1];
    const data = this.props.data;

    const g = select(svg).append("g");

    var circlePacking = pack()
        .size([width, height]);

    const root = hierarchy(data)
        .sum(function(d) { return 10; })
        .sort(function(a, b) { return b.value - a.value; });

    var node = g.selectAll(".node")
      .data(circlePacking(root).descendants())
      .enter().append("g")
        .attr("class", function(d) { return d.children ? "node" : "leaf node"; })
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

    node.append("title")
        .text(function(d) { return d.data.name + "\n" + d.value; });

    node.append("circle")
        .attr("r", function(d) { return d.r; })
        .attr("opacity", 0.5);

    node.append("text")
        .attr("dy", (d, i) => d.children ? `${-d.r/20}rem` : "0")
        .attr("alignment-baseline", "middle")
        .text(function(d) { return d.data.name; });
  }

  render() {
    return <svg ref={svg => (this.svg = svg)} 
      width={this.props.size[0]} 
      height={this.props.size[1]} />;
  }
}