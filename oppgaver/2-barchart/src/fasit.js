const yScale = scaleLinear()
  .domain([0, dataMax])
  .range([0, height]);

select(svg)
  .style("background-color", "#d1d1d1");

select(svg)
  .selectAll("rect")
  .data(this.props.data)
  .enter()
  .append("rect");

select(svg)
  .selectAll("rect")
  .data(this.props.data)
  .exit()
  .remove();

const barWidth = 50;
const barMargin = 2;

select(svg)
  .selectAll("rect")
  .data(this.props.data)
  .style("fill", (d, i) => i % 2 ? "#3d3d3d" : "#fe9922")
  .attr("x", (d, i) => 10 + i * (barWidth + barMargin))
  .attr("y", d => height - yScale(d))
  .attr("height", d => yScale(d))
  .attr("width", barWidth)
  .attr("rx", 10)
  .attr("ry", 10);

const yScaleInverted = yScale.copy().range([height, 0]);
const yAxis = axisLeft(yScaleInverted);

select(svg)
  .append("g")
    .attr("transform", `translate(${-barMargin}, 0)`)
    .call(yAxis);