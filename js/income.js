



function drawGraph7(svg,data){

    // set the dimensions and margins of the graph
    // var margin = {top: 20, right: 20, bottom: 70, left: 40},
    //     width = 600 - margin.left - margin.right,
    //     height = 300 - margin.top - margin.bottom;
    console.log(data)
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 500 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(5);
var y = d3.scaleLinear()
          .range([height, 0]);

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select(svg)
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")

    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


  // Scale the range of the data in the domains
  x.domain(data.map(function(d) { return d.Category; }));
  max_value = d3.max(data, function(d) { return (d.Average)})+1;
  y.domain([0, max_value]);



  console.log(x.bandwidth())
  svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) {
      return x(d.Category);
    })
    //.attr("y", height)
    .attr("y", function(d) {
      return y(d.Average);
    })
    .attr("width", 100)
    .attr("height", function(d) {
      return height - y(d.Average);
    });
  // add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
    .selectAll("text")
        .attr("y",6)
        .attr("x",6)
        .style("text-anchor","start");

  // add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y).tickFormat(d3.format(".0f")));

      // gridlines in x axis function
      function make_x_gridlines() {
          return d3.axisBottom(x)
              .ticks(5)
      }

      // gridlines in y axis function
      function make_y_gridlines() {
          return d3.axisLeft(y)
              .ticks(5)
      }

      // add the X gridlines
      svg.append("g")
      .attr("class", "grid")
      .attr("transform", "translate(0," + height + ")")
      .call(make_x_gridlines()
          .tickSize(-height)
          .tickFormat(""));

      // add the Y gridlines
      svg.append("g")
      .attr("class", "grid")
      .call(make_y_gridlines()
          .tickSize(-width)
          .tickFormat(""));


      // text label for the x axis
      svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 8) + ")")
      .style("text-anchor", "middle")
      .text("Income Category");


// text label for the y axis
svg.append("text")
.attr("transform", "rotate(-90)")
.attr("y", -40)
.attr("x",0 - (height / 2))
.attr("dy", "1em")
.style("text-anchor", "middle")
.text("Income in Million Dollars");   



};



d3.csv("dataset/Income.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
    d.Category = d.Category;
    d.Average = d.Average/1000000;

  });
  drawGraph7(document.querySelector('#income'),data);
});
