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

const numberFormat = format(".1f");

dataTR
  .append("td")
  .attr("class", "number")
  .text((d, i) => numberFormat(d.hardness));

dataTR
  .append("td")
  .attr("style", (d, i) => `color: ${d.color}`)
  .text((d, i) => d.color);