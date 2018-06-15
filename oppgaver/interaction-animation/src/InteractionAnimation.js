import React, { Component } from "react";
import "./App.css";
import { transition } from "d3-transition";
import { select } from "d3-selection";

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

  updateChart(data) {
    console.log("updateChart");

    const color = (d, i) => `hsl(32, 100%, ${(d.value/20 + 0.3)*100}%)`
    const xCoord = (d, i) => 60 + i * 60;
    const radius = (d, i) => 5 + d.value * 2.5;

    const t = transition()
      .duration(200);

    // JOIN: bind elementer til data
    const circles = select(this.svg)
      .selectAll("circle")
      .data(data, (d) => d.name);

    // ENTER: opprett nye elementer når nye data
    circles
      .enter()
      .append("circle")
      .style("fill", color)
      .attr("cx", xCoord)
      .attr("cy", this.height/2)
      .attr("r", 0)
      .transition(t)
      .attr("r", radius)


    // UPDATE: oppdater elementer iht endret data
    circles
      .transition(t)
      .attr("r", radius)
      .attr("cx", xCoord)
      .style("fill", color)

    // EXIT: fjern elementer uten tilhørende data
    circles
      .exit()
      .transition(t)
      .attr("r", 0)
      .remove();

    const text = select(this.svg)
      .selectAll("text")
      .data(data, (d) => d.name);

    text
      .enter()
      .append("text")
      .text((d, i) => d.name)
      .attr("x", xCoord)
      .attr("text-anchor", "middle")
      .attr("y", this.height/2 - 40)

    text
      .transition(t)
      .attr("x", xCoord)
      .attr("text-anchor", "middle")

    text
      .exit()
      .remove();
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

    let counter = 0;

    const updateData = () => {
      const push = Math.random() < 0.5;
      const verdi = Math.floor(Math.random() * 10);
      const index = Math.floor(Math.random() * data.length);

      const max = 12;

      const action = Math.random() < 0.5
        ? "change" 
        : ((data.length == 1 || Math.random() < 0.5 && data.length <= max)
          ? "push"
          : "pop");

      const dataAsString = data.map((e) => `${e.name}:${e.value}`).join(" ");

      console.log(`updateData ${action} ${verdi} ${index} \n${dataAsString}`)

      if (action == "change") {
        data[index].value = verdi;
      } else if (action == "push") {
        data.splice(index, 0, {name: "x" + counter++, value: verdi});
      } else if (action == "pop") {
        data.splice(index, 1);
      }

      this.updateChart(data);
    }

    window.setInterval(updateData, 500);
  }

  render() {
    console.log("render")
    return <svg ref={container => (this.container = container)} />
  }
}
export default InteractionAnimation;
