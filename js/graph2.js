$(document).ready(function(){
	width = $('#graph2').width();
	height = $('#graph2').height();
  // width = 200
  // height = 100
	drawGraph2(width, height);
});
function drawGraph2(w,h){
  var svg = d3.select("#graph2").append("svg"),
      margin = {top: 50, right: 10, bottom: 50, left: 50},
      // width = w - margin.left - margin.right,
      // height = h - margin.top - margin.bottom,
			width = w + 700
			height = h + 200
      g2 = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  var x = d3.scaleBand()
      .rangeRound([0, width])
      .paddingInner(5)
      .align(2);

  var y = d3.scaleLinear()
      .rangeRound([height, 0]);



  var z = d3.scaleOrdinal()
      .range(["#0099ff", "#d580ff", "#00e600", "#4ddbff", "#ffcc00", "#ff3300", "#ff9900"]);
  //var colors = ["b33040", "#d25c4d", "#f2b447", "#d9d574","#19E593","#19E593","#19E593"];
  d3.csv("./dataset/bottom_10_2017.csv", function(d, i, columns) {
    for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
    d.total = t;
    return d;
  }, function(error, data) {
    if (error) throw error;
    var keys = data.columns.slice(1);
    //data.sort(function(a, b) { return b.total - a.total; });
		data.sort(function(a, b) { return d3.descending(b.total - a.total); });
    x.domain(data.map(function(d) { return d.Country; }));
    y.domain([0, d3.max(data, function(d) { return d.total; })]).nice();
    z.domain(keys);


    g2.append("g")
      .selectAll("g")
      .data(d3.stack().keys(keys)(data))
      .enter().append("g")
        .attr("fill", function(d) { return z(d.key); })
      .selectAll("rect")
      .data(function(d) { return d; })
      .enter().append("rect")
        .attr("x", function(d) { return x(d.data.Country); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
				//.attr("height", 750)
        .attr("width", 85);

    g2.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + 300 + ")")
        .call(d3.axisBottom(x));
    g2.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(y).ticks(null, "s"))
      .append("text")
        .attr("x", 2)
        .attr("y", y(y.ticks().pop()) + 5)
        .attr("dy", "0.32em")
        .attr("fill", "#000")
        .attr("font-weight", "bold")
        .attr("text-anchor", "start")


				var legend = g2.append("g")
					.attr("class", "legend")
					.attr("transform", "translate(" + (100) + ","  + 350 + ")")
					.selectAll("g")
					//.data(["Donated", "Received"])
					.data(["Dystopia Residual", "Trust", "Generosity", "Freedom","Life Expectancy","Family","Economy (GDP)"])
					.enter().append("g")

					legend.append("circle")
					.attr("cy", function(d, i){
							return i * 17
					})
					.attr("r", 8)
					.attr("fill", function(d){
							if (d === "Dystopia Residual")
									return '#0099ff'
							else if (d === "Trust")
									return '#d580ff'
							else if(d === "Generosity")
									return "#00e600"
							else if(d === "Freedom")
									return "#4ddbff"
							else if(d === "Life Expectancy")
									return "#ffcc00"
							else if(d === "Family")
								return "#ff3300"
							else {
								return "#ff9900"
							}

					});

					legend.append("text")
					.attr("y", function (d, i){
							return i*17 +5;
					})
					.attr("x", 20)
					.text(function(d){
							return d
					});

  });
}