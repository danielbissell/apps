
let margin = {
  top: 10,
  right: 10,
  bottom: 30,
  left: 70
};

const w = 800 - margin.right - margin.left;
const h = 400 - margin.top - margin.bottom;

var json = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json';

d3.json(json, function (dataset) {
  //date and value arr
   var date = [];
   var value = [];

    // create arrays
    dataset.data.map(data => {
        date.push(data[0].substring(0, 4));
        value.push(data[1]);
    });
  
 let barwidth = (w/(value.length));
 
let xScale = d3.scale.linear()
  .domain(d3.range(0, date.length))
  .range([0, w]); // 10px from border

let yScale = d3.scale.linear()
  .domain([0, d3.max(value)])
  .range([0, h]); // lowers ~20px from top
  
    let vScale = d3.scale.linear()
  .domain([0, d3.max(value)])
  .range([h , 0]); // lowers ~20px from top


let hScale = d3.scale.linear()
  .domain([d3.min(date), d3.max(date)])
  .range([0,w]); // 10px from border
   
  //Axis
const svg = d3.select(".chart")
       .append("svg")
       .attr("width", w + margin.right + margin.left)
       .attr("height", h + margin.top + margin.bottom)
        .append("g")
        .attr("transform", 'translate(' + margin.left + ',' + margin.top +')')
            .style("background", "lightgray");
svg.selectAll("rect")
  .data(value)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * barwidth)
  .attr("y", (d) => h - yScale(d))
  .attr("width", barwidth) // was 25
  .attr("height", (d) => yScale(d))
  .attr("fill", "green")
  
  // tooltip
            .attr('data-date', (d, i) => dataset.data[i][0])
            .attr('data-gdp', (d, i) => dataset.data[i][1])
.on("mouseover",  (d, i) => {
                tooltip
                    .style("left", (d3.event.pageX + 5) + "px")
                    .style("top", (d3.event.pageY + 3) + "px")
                    .style("display", "inline-block")
                    .attr('data-date', dataset.data[i][0])
                    .html(`Date: </br>  ${dataset.data[i][0]} </br>Value: </br> ${dataset.data[i][1]}`);
            })
            .on("mouseout", function (d) { tooltip.style("display", "none"); });


;// end d3 svg
  


  //vaxis
var vAxis = d3.svg.axis()
  .scale(vScale)
  .orient('left')
  .ticks(5)
  .tickPadding(5);

  //vguide

var vGuide = d3.select('svg')
  .append('g')
    vAxis(vGuide)
    vGuide.attr('transform', 'translate(' + margin.left + ',' + margin.top +')')
    vGuide.selectAll('path')
      .style('fill', 'none')
      .style('stroke', '#000')
    vGuide.selectAll('line')
      .style('stroke', '#000');


///////////////////////
var hAxis = d3.svg.axis()
  .scale(hScale)
  .orient('bottom')
  .ticks(10)
  .tickFormat(d3.format("d"))
  .tickPadding(2);

;

  //vguide

var hGuide = d3.select('svg')
  .append('g')
    hAxis(hGuide)
    hGuide.attr('transform', 'translate('+ (margin.left) + ',' + (h + margin.top) +')')
    hGuide.selectAll('path')
      .style('fill', 'none')
      .style('stroke', '#000')
    hGuide.selectAll('line')
      .style('stroke', '#000')


//end Axis


  //tooltip
  let tooltip = d3
    .select("body")
    .style("position", "absolute")
    .append("div")
    .attr("class", "tooltip")
    .attr("id", "tooltip")
    .style("opacity", 1);
  
  
  svg.append("text")
    .attr("x", 40)
    .attr("y", 45)
     .text(dataset.source_name) 
  
  
svg.append("text")
    .attr("x", 40)
    .attr("y", 60)
    .text("Quarterly US GDP in $USD Billions");

svg.append("text")
    .attr("x", 40)
    .attr("y", 75)
    //.text("(Gross Domestic Product)");
     .text(dataset.source_name) 
  
});//end