var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv
d3.csv("assets/data/data.csv", function(error, acsData) {

  // Log an error if one exists
  if (error) return console.warn(error);

  // Print the tvData
  console.log(acsData);

  // Cast the hours value to a number for each piece of tvData
  acsData.forEach(function(data) {
    data.poverty = +data.poverty;
    data.healthcare = +data.healthcare
  });

  var xLinearScale = d3.scaleLinear()
    .domain([d3.max(acsData, d => d.poverty)])
    .range([0, width]);

  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(acsData, d => d.healthcare)])
    .range([height, 0]);
  

  // @TODO
  // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
  var barWidth = (chartWidth - (barSpacing * (tvData.length - 1))) / tvData.length;

  // Create code to build the bar chart using the tvData.
  var circlesGroup = chartGroup.selectAll("#scatter")
    .data(acsData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d.poverty)
    .attr("cy", d => yLinearScale(d.healthcare))
    .attr("r", 20)
    .attr("fill", "blue")
    .attr("opacity", ".5")
    )

});












// // Retrieve data from the CSV file and execute everything below
// d3.csv("hairData.csv", function(err, hairData) {
//   if (err) throw err;

//   // parse data
//   hairData.forEach(function(data) {
//     data.hair_length = +data.hair_length;
//     data.num_hits = +data.num_hits;
//     data.num_albums = +data.num_albums;
//   });

//   // xLinearScale function above csv import
//   var xLinearScale = xScale(hairData, chosenXAxis);

//   // Create y scale function
//   var yLinearScale = d3.scaleLinear()
//     .domain([0, d3.max(hairData, d => d.num_hits)])
//     .range([height, 0]);

//   // Create initial axis functions
//   var bottomAxis = d3.axisBottom(xLinearScale);
//   var leftAxis = d3.axisLeft(yLinearScale);

//   // append x axis
//   var xAxis = chartGroup.append("g")
//     .classed("x-axis", true)
//     .attr("transform", `translate(0, ${height})`)
//     .call(bottomAxis);

//   // append y axis
//   chartGroup.append("g")
//     .call(leftAxis);

//   // append initial circles
//   var circlesGroup = chartGroup.selectAll("circle")
//     .data(hairData)
//     .enter()
//     .append("circle")
//     .attr("cx", d => xLinearScale(d[chosenXAxis]))
//     .attr("cy", d => yLinearScale(d.num_hits))
//     .attr("r", 20)
//     .attr("fill", "pink")
//     .attr("opacity", ".5");

  
//       }
//     });
// });

