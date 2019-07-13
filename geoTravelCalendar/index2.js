let margin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
// test var delete me
let date = 6/4/2019;
let month = 'July';
let monthNum = 6;
let year = 2019;
// delete test var above


const w = 1000;
const h = 500;


d3.queue()
.defer(d3.json, 'data/us.json')
//.defer(d3.json, 'data/cities100.json')
.defer(d3.csv, 'data/travelCalendarInput.csv')
.await(ready)





  console.log('start');
// D3 Projection
var projection = d3.geoAlbersUsa()
  .scale([800]).translate([w/2, h/2]);

// Create the path generator
var path = d3.geoPath()
.projection(projection);



function ready (error, UsaMap, usCities){


console.log(usCities); 


  var states = topojson.feature(UsaMap, UsaMap.objects.us).features  
//  var capitols = topojson.feature(capCities, capCities).features
  
   
 const svg = d3.select(".chart")
       .append("svg")
       .attr("width", w )
       .attr("height", h)
       .attr("transform", "translate(" + 0 + "," + 0 + ")")
       .append("g");
  
 svg.selectAll("state")
   .data(states)
   .enter()
   .append("path")
   .attr("class", "state")
   .attr("d", path) 

//capitols
var capitols =  svg.selectAll("capitol")
  .data(usCities)  
  .enter()
  .append("circle")
  .attr("fill", "red")
  .attr("r", 3)

function checkDate () {
capitols
  .attr("cx", function(d){
    var coords = projection([d.Long, d.Lat])
        return coords[0];
  }
)
  .attr("cy", function(d){
    var coords = projection([d.Long, d.Lat])
        return coords[1];
     })
  
     svg.selectAll("cityLabel")
     .data(usCities)  
     .enter()
     .append("text")
     .attr("class", "cityLabel")
     .attr("x", function(d){
      var coords = projection([d.Long, d.Lat])
      return coords[0];
     })
     .attr("y", function(d){
      var coords = projection([d.Long, d.Lat])
            return coords[1];
        })
      .text(function(d){
        return  d.AM + " - " + d.Customer;
      })
      .attr('dx', 5)
      .attr('dy', 2)
 
    }// end checkDate


console.log('end')

};//end UsaMap