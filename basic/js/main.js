/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    2.6 - Selections and data joins
 */

d3.json("data/ages.json").then(data => {
  data.forEach(d => {
    d.age = Number(d.age);
  });
// d3.tsv("data/ages.tsv").then(data => {
// 	tsvData.forEach(d => d.age = Number(d.age))
// 	console.log("tsv ", data)
// })
// d3.json("data/ages.json").then(data => {
// 	jsonData.forEach(d => d.age = Number(d.age))
// 	console.log("json ", data)
// })

const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400);

const circles = svg.selectAll("circle").data(data);

circles
  .enter()
  .append("circle")
  .attr("cx", (d, i) => 50 * i + 50)
  .attr("cy", 100)
  .attr("r", (d) => 2 * d.age)
  .attr("fill", "red");
});
