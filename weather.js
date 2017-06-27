// THIS ONE WORKS!


$(document).ready(function(){
// Geo Location Vars
var lat;
var lon;

// Get Geo Location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;


    //API
      var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=0d8cb05a7bab59856011d598a0126a63'+'?callback=?';
    console.log(api);

$.getJSON(api, function(data){
  console.log(data);
}); // getJSON



  }); // Geo Location
}

}); // Document Ready
