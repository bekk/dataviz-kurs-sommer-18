import React, { Component } from 'react';
import './App.css';

import { max, min, transpose, range } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { select, selectAll } from 'd3-selection';
import { stack, stackOffsetWiggle, area } from 'd3-shape';
import { interpolateRainbow } from 'd3-scale-chromatic';
import { transition } from 'd3-transition';

const WIDTH = 960;
const HEIGHT = 500;
const NUM_LAYERS = 20;
const NUM_SAMPLES = 200;

function plot(node, data) {
  let plot = stack()
    .keys(range(NUM_LAYERS))
    .offset(stackOffsetWiggle);

  let layers0 = plot(transpose(data.layers0));
  let layers1 = plot(transpose(data.layers1));
  let layers = layers0.concat(layers1);

  let rootPanel = select(node).append('g');

  let x = scaleLinear()
    .domain([0, NUM_SAMPLES - 1])
    .range([0, WIDTH]);

  let y = scaleLinear()
    .domain([
      min(layers, l => min(l, d => d[0])),
      max(layers, l => max(l, d => d[1]))
    ])
    .range([HEIGHT, 0]);

  let a = area()
    .x((_, i) => x(i))
    .y0(d => y(d[0]))
    .y1(d => y(d[1]));

  rootPanel
    .selectAll('path')
    .data(layers0)
    .enter()
    .append('path')
    .attr('d', a)
    .attr('fill', () => interpolateRainbow(Math.random()));

  return function() {
    let t = transition().duration(2500);

    selectAll('path')
      .data((([layers1, layers0] = [layers0, layers1]), layers0))
      .transition(t)
      .attr('d', a);
  };
}

class SteamGraph extends Component {
  constructor(props) {
    super(props);
    this.createSteamGraph = this.createSteamGraph.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  componentDidMount() {
    this.shuffleInternal = this.createSteamGraph();
  }

  componentDidUpdate() {
    this.shuffleInternal = this.createSteamGraph();
  }

  createSteamGraph() {
    let node = this.node;
    let data = this.props.data;

    return plot(node, data);
  }

  shuffle() {
    this.shuffleInternal();
  }

  render() {
    return (
      <div>
        <button onClick={this.shuffle}>Shuffle!</button>
        <svg
          ref={node => (this.node = node)}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        />
      </div>
    );
  }
}
export default SteamGraph;
