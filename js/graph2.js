// // $(document).ready(function(){
// // 	width = $('#graph2').width();
// // 	height = $('#graph2').height();
// //   // width = 200
// //   // height = 100
// // 	drawGraph2(width, height);
// // });
// // function drawGraph2(w,h){
// //   var svg = d3.select("#graph2").append("svg"),
// //       margin = {top: 50, right: 10, bottom: 50, left: 50},
// //       // width = w - margin.left - margin.right,
// //       // height = h - margin.top - margin.bottom,
// // 			width = w + 700
// // 			height = h + 200
// //       g2 = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
// //   var x = d3.scaleBand()
// //       .rangeRound([0, width])
// //       .paddingInner(5)
// //       .align(2);
// //
// //   var y = d3.scaleLinear()
// //       .rangeRound([height, 0]);
// //
// //
// //
// //   var z = d3.scaleOrdinal()
// //       .range(["#0099ff", "#d580ff", "#00e600", "#4ddbff", "#ffcc00", "#ff3300", "#ff9900"]);
// //   //var colors = ["b33040", "#d25c4d", "#f2b447", "#d9d574","#19E593","#19E593","#19E593"];
// //   d3.csv("./dataset/bottom_10_2017.csv", function(d, i, columns) {
// //     for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
// //     d.total = t;
// //     return d;
// //   }, function(error, data) {
// //     if (error) throw error;
// //     var keys = data.columns.slice(1);
// //     //data.sort(function(a, b) { return b.total - a.total; });
// // 		data.sort(function(a, b) { return d3.descending(b.total - a.total); });
// //     x.domain(data.map(function(d) { return d.Country; }));
// //     y.domain([0, d3.max(data, function(d) { return d.total; })]).nice();
// //     z.domain(keys);
// //
// //
// //     g2.append("g")
// //       .selectAll("g")
// //       .data(d3.stack().keys(keys)(data))
// //       .enter().append("g")
// //         .attr("fill", function(d) { return z(d.key); })
// //       .selectAll("rect")
// //       .data(function(d) { return d; })
// //       .enter().append("rect")
// //         .attr("x", function(d) { return x(d.data.Country); })
// //         .attr("y", function(d) { return y(d[1]); })
// //         .attr("height", function(d) { return y(d[0]) - y(d[1]); })
// // 				//.attr("height", 750)
// //         .attr("width", 85);
// //
// //     g2.append("g")
// //         .attr("class", "axis")
// //         .attr("transform", "translate(0," + 300 + ")")
// //         .call(d3.axisBottom(x));
// //     g2.append("g")
// //         .attr("class", "axis")
// //         .call(d3.axisLeft(y).ticks(null, "s"))
// //       .append("text")
// //         .attr("x", 2)
// //         .attr("y", y(y.ticks().pop()) + 5)
// //         .attr("dy", "0.32em")
// //         .attr("fill", "#000")
// //         .attr("font-weight", "bold")
// //         .attr("text-anchor", "start")
// //
// //
// // 				var legend = g2.append("g")
// // 					.attr("class", "legend")
// // 					.attr("transform", "translate(" + (100) + ","  + 350 + ")")
// // 					.selectAll("g")
// // 					//.data(["Donated", "Received"])
// // 					.data(["Dystopia Residual", "Trust", "Generosity", "Freedom","Life Expectancy","Family","Economy (GDP)"])
// // 					.enter().append("g")
// //
// // 					legend.append("circle")
// // 					.attr("cy", function(d, i){
// // 							return i * 17
// // 					})
// // 					.attr("r", 8)
// // 					.attr("fill", function(d){
// // 							if (d === "Dystopia Residual")
// // 									return '#0099ff'
// // 							else if (d === "Trust")
// // 									return '#d580ff'
// // 							else if(d === "Generosity")
// // 									return "#00e600"
// // 							else if(d === "Freedom")
// // 									return "#4ddbff"
// // 							else if(d === "Life Expectancy")
// // 									return "#ffcc00"
// // 							else if(d === "Family")
// // 								return "#ff3300"
// // 							else {
// // 								return "#ff9900"
// // 							}
// //
// // 					});
// //
// // 					legend.append("text")
// // 					.attr("y", function (d, i){
// // 							return i*17 +5;
// // 					})
// // 					.attr("x", 20)
// // 					.text(function(d){
// // 							return d
// // 					});
// //
// //   });
// // }
//
//
//
//
//
// function createChart (svg, data) {
//
//   const colors = ['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']
//
//   svg = d3.select(svg)
//   const margin = {top: 20, right: 10, bottom: 30, left: 40}
//   const width = 1000 - margin.left - margin.right
//   const height = 550 - margin.top - margin.bottom
//   const g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
//
//   var x0 = d3.scaleBand()
//     .rangeRound([0, width])
//     .paddingInner(0.1)
//
//   var x1 = d3.scaleBand()
//     .padding(0.05)
//
//   var y = d3.scaleLinear()
//     .rangeRound([height, 0])
//
//   var z = d3.scaleOrdinal()
//     .range(colors)
//
//   // check each subset of data for possible sections, since not all subsets have every possible section.
//   let nameKeys = data[Object.keys(data)[0]].map(obj =>obj.name)
//   let nameKeys2 = data[Object.keys(data)[1]].map(obj =>obj.name)
//   let nameKeys3 = data[Object.keys(data)[2]].map(obj =>obj.name)
//   let valueKeys =   ["Family", "Freedom", "Trust (Government Corruption)", "Generosity", "Health (Life Expectancy)", "Dystopia Residual", "Economy (GDP per Capita)"]
//
//     //fill in empty data entries
//     Object.keys(data).forEach((d)=>{
//       data[d].forEach(section=>{
//         valueKeys.forEach(k=>{
//           if (section.values[k] === undefined) section.values[k] = 0
//         })
//       })
//     })
//
//  x0.domain(nameKeys)
//   x1.domain(valueKeys).rangeRound([0, x0.bandwidth()])
//
//   const barContainer = g.append('g')
//
//   const xAxis = g.append('g')
//       .attr('class', 'axis')
//       .attr('transform', 'translate(0,' + height + ')')
//       .call(d3.axisBottom(x0))
//
//   const yAxis = g.append('g')
//       .attr('class', 'axis')
//
//   yAxis
//     .append('text')
//       .attr('x', 2)
//       .attr('y', y(y.ticks().pop()) + 0.5)
//       .attr('dy', '0.32em')
//       .attr('font-weight', 'bold')
//       .attr('text-anchor', 'start')
//       .text('Prop Value')
//
//   var legend = g.append('g')
//   .attr('font-size', 10)
//   .attr('text-anchor', 'end')
//
//   legend.append('text')
//   .text('Factors')
//   .attr('x', width + 150)
//   .style('font-weight', 'bold')
//   .attr('dy', -10)
//   .attr('dx', 10)
//
//   var legendEnter = legend
//     .selectAll('g')
//     .data(valueKeys)
//     .enter().append('g')
//     //.attr("transform", "translate(" + (100) + ","  + 350 + ")")
//     .attr('transform', function (d, i) { return 'translate(0,' + i * 20 + ')' })
//
//     legendEnter.append('text')
//         .attr('x', width + 145)
//         .attr('y', 9.5)
//         .attr('dy', '0.32em')
//         .text(d => d)
//
//   legendEnter.append('rect')
//       .attr('x', width + 150)
//       .attr('width', 19)
//       .attr('height', 19)
//       .attr('fill', z)
//
//
//
//
//   const stack = d3.stack()
//       .keys(valueKeys)
//
//   // updates both the year + the chart type (group or stacked)
//   function updateChart (data, chartType='Group') {
//
//     // ========================================================
//     //  show grouped view
//     // ========================================================
//     if(data[0]["name"]=="Switzerland")
//     {
//       x0.domain(nameKeys)
//       x1.domain(valueKeys).rangeRound([0, x0.bandwidth()])
//     }
//     else if(data[0]["name"]=="Denmark"){
//       x0.domain(nameKeys2)
//       x1.domain(valueKeys).rangeRound([0, x0.bandwidth()])
//     }
//     else if(data[0]["name"]=="Norway"){
//       x0.domain(nameKeys3)
//       x1.domain(valueKeys).rangeRound([0, x0.bandwidth()])
//     }
//
//
//     xAxis.transition()
//     .call(d3.axisBottom(x0))
//
//     if (chartType === 'Group'){
//
//       //find max value of a section
//       const maxValue = d3.max(data.map((d) => Object.values(d.values)).reduce((a, b) => a.concat(b), []))
//       y.domain([0, maxValue]).nice()
//
//       yAxis.transition()
//       .call(d3.axisLeft(y))
//
//       const barsWithData = barContainer
//       .selectAll('g')
//       .data(data)
//
//       barsWithData.exit().remove()
//
//       const bars = barsWithData
//       .enter()
//       .append('g')
//       .attr('transform', function (d) { return 'translate(' + x0(d.name) + ',0)' })
//       .merge(barsWithData)
//       .selectAll('rect')
//       .data(function (d) {
//         return Object.keys(d.values).map(k => ({ key: k, value: d.values[k] }))
//       })
//
//       bars.exit().transition().style('opacity', 0).remove()
//
//       bars
//       .enter()
//       .append('rect')
//       .attr('fill', function (d) {
//         return z(d.key)
//       })
//       // start y at height (0) so animation in looks like bars are growing upwards
//       .attr('y', height)
//       .merge(bars)
//       .transition()
//       .attr('width', x1.bandwidth())
//       .attr('x', function (d) { return x1(d.key) })
//       .attr('y', d => y(d.value))
//       .attr('height', d => height - y(d.value))
//
//     }
//
//     // ========================================================
//     //  show stacked view
//     // ========================================================
//     else if (chartType === 'Stacked Bar Chart'){
//
//       //find max value of a section
//       const maxValue = d3.max(
//         data.map((d) => Object.values(d.values))
//       .map((valueArray)=>{
//         return valueArray.reduce((a,b)=> a+ b)
//       })
//     )
//
//       y.domain([0, maxValue]).nice()
//
//       yAxis.transition()
//       .call(d3.axisLeft(y))
//
//       //add data for missing bars
//       const seriesFlipped = stack(data.map(d=>{
//         const defaultData = {}
//         valueKeys.forEach(k=> defaultData[k] = 0)
//       return Object.assign(defaultData, d.values)
//       }))
//
//       const series = []
//       //need to reorient the series
//       //we want a list of groups, not a list of rects from each level
//       seriesFlipped[0].forEach((col, i)=>{
//         const arr = []
//         seriesFlipped.forEach((row, index2)=>{
//           //mimic the key from the grouped data format
//           row[i].key = index2 + 1 + ''
//           arr.push(row[i])
//         })
//         series.push(arr)
//       })
//
//       const barSections = barContainer
//       .selectAll('g')
//       .data(series)
//
//       const bars = barSections
//       .enter()
//       .append('g')
//       .merge(barSections)
//       .attr('transform', (d,i)=> {console.log(x0(nameKeys[i])); return 'translate(' + x0(nameKeys[i]) + ',0)'} )
//       .selectAll('rect')
//       .data(d=>d, (d)=> d.key)
//
//       const enterBars = bars.enter().append('rect')
//       .attr('fill',  (d)=> z(d.key))
//       bars.exit().transition().style('opacity', 0).remove()
//
//       enterBars
//       .merge(bars)
//       .transition()
//       .delay((d,i)=> i * 50)
//       .attr('width', x0.bandwidth())
//       .attr("y", function(d) {return y(d[1]) })
//       .attr("x", 0)
//       .attr("height", function(d) { return y(d[0]) - y(d[1]) })
//
//     }
//
//   }
//
//
//   return {
//     updateChart
//   }
// }
//
// d3.json('./Saddest10.json', function(error, data){
//
//   //start with the first year selected
//   const chart = createChart(document.querySelector('svg'), data)
//
//   // append the input controls
//   // var legend = g.append('g')
//   // .attr('font-size', 10)
//   // .attr('text-anchor', 'end')
//   //
//   // legend.append('text')
//   // .text('Factors')
//   // .attr('x', width - 19)
//   // .style('font-weight', 'bold')
//   // .attr('dy', -10)
//   // .attr('dx', 10)
//   //
//   // var legendEnter = legend
//   //   .selectAll('g')
//   //   .data(valueKeys)
//   //   .enter().append('g')
//   //   //.attr("transform", "translate(" + (100) + ","  + 350 + ")")
//   //   .attr('transform', function (d, i) { return 'translate(0,' + i * 20 + ')' })
//   //
//   // legendEnter.append('rect')
//   //     .attr('x', width - 19)
//   //     .attr('width', 19)
//   //     .attr('height', 19)
//   //     .attr('fill', z)
//   //
//   // legendEnter.append('text')
//   //     .attr('x', width - 24)
//   //     .attr('y', 9.5)
//   //     .attr('dy', '0.32em')
//   //     .text(d => d)
//
//   const fieldset1 = d3.select('.controls').append('fieldset').attr("align","center").style("height", 40)
//   fieldset1.append('legend').text(' Select Year')
//
//   Object.keys(data).forEach((year, index )=>{
//
//     const label = fieldset1.append('label')
//
//     label
//     .append('input')
//     .attr('type', 'radio')
//     .attr('name', 'year')
//     .attr('value', year)
//     .attr('checked', function(){
//       if (index === 0) return true
//       return null
//     })
//
//     label.append('span')
//     .text(year)
//
//     label.on('click', function(){
//       chart.updateChart(data[year], document.querySelector('input[name="graphType"]:checked').value)
//     })
//   })
//
//   const fieldset2 = d3.select('.controls').append('fieldset').attr("align","center")
//   const types =  ['Group', 'Stacked Bar Chart']
//   fieldset2.append('legend').text('Select Graph Layout')
//
//
//   types.forEach((graphType, index)=>{
//     const label = fieldset2.append('label')
//     label.append('input')
//     .attr('type', 'radio')
//     .attr('name', 'graphType')
//     .attr('value', graphType)
//     .attr('checked', function(){
//       if (index === 0) return true
//       return null
//     })
//     .on('click', ()=>{
//       chart.updateChart(data[document.querySelector('input[name="year"]:checked').value], graphType)
//     })
//
//     label.append('span')
//     .text(graphType)
//
//   })
//
//
//
//   // render initial chart
//   chart.updateChart(data[Object.keys(data)[0]])
//
//
//
// })
