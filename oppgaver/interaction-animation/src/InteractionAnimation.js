import React, { Component } from "react";
import "./App.css";
import { transition } from "d3-transition";
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { select } from "d3-selection";
import { axisLeft } from "d3-axis";

class InteractionAnimation extends Component {
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
    console.log("create");

    const svg = this.container;
    svg.setAttribute("width", this.props.size[0]);
    svg.setAttribute("height", this.props.size[1]);

    const node = svg;
    const data = this.props.data;
    const width = this.props.size[0];
    const height = this.props.size[1];

    function createD3(data) {
      const t = transition()
        .duration(200);

      select(node)
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .style("fill", "#fe9922")
        .attr("cx", (d, i) => 60 + i * 50)
        .attr("cy", height/2)
        .attr("r", 0)
        .transition(t)
        .attr("r", (d, i) => 10 + d.value * 2)

      select(node)
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d, i) => d.name)
        .attr("x", (d, i) => 60 + i * 50 - 5)
        .attr("y", height/2 - 40)

      select(node)
        .selectAll("circle")
        .data(data)
        .transition(t)
        .attr("r", (d, i) => 10 + d.value * 2)

      select(node)
        .selectAll("circle")
        .data(data)
        .exit()
        .transition(t)
        .attr("r", (d, i) => 0)
        .remove();

      select(node)
        .selectAll("text")
        .data(data)
        .exit()
        .remove();
    }

    createD3(this.props.data);

    const props = this.props;

    function updateData() {
      const push = Math.random() < 0.5;
      const verdi = Math.floor(Math.random() * 10);
      const index = Math.floor(Math.random() * props.data.length);
      const navn = "x" + verdi;

      const max = 12;

      const action = Math.random() < 0.5
        ? "change" 
        : ((props.data.length == 1 || Math.random() < 0.5 && props.data.length <= max)
          ? "push"
          : "pop");

      console.log(`Oppdaterer data ${props.data.length} ${action} ${verdi} ${index}`)

      if (action == "change") {
        props.data[index].value = verdi;
      } else if (action == "push") {
        props.data.push({name: navn, value: verdi});
      } else if (action == "pop") {
        props.data.pop();
      }

      createD3(props.data);
    }

    window.setInterval(updateData, 500);
  }

  render() {
    console.log("render")
    return <svg ref={container => (this.container = container)} />
  }
}
export default InteractionAnimation;
