$(document).ready(function(){
// Geo Location Vars
var lat;
var lon;

// Get Geo Location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;

    var api = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=0d8cb05a7bab59856011d598a0126a63';

$.getJSON(api, function(data) {

      //All variables for current weather data
      var city = data.name;
      var humidity = data.main.humidity;
      var weatherType = data.weather[0].description;
      var kTemp = data.main.temp;
      var windSpeed = data.wind.speed;
      var currentIcon = data.weather[0].icon;
      var cTemp = Math.floor(kTemp-273)+' &#176;'+'c';
      var fTemp = Math.floor(1.8 * (kTemp - 273) + 32) + ' &#176;'+'f';
      var tempC = Math.floor(kTemp-273);
      var tempF = Math.floor(1.8 * (kTemp - 273) + 32);

//Capitalizing words
function capitalizeWord(str) {
  var convert = str.toLowerCase().split(' ');
  var final = convert.map(function(words) {
    return words.replace(words.charAt(0), words.charAt(0).toUpperCase());
  });
  return final.join(' ');
}

      var tempToggle = true;

      $('#city').html(city);
      $('#tempNow').html(fTemp);
      $('#windSpeed').html('Wind Speed: '+windSpeed+' MPH');
      $('#weatherType').html(capitalizeWord(weatherType));
      $('#humidity').html('Humidity: '+humidity+'%');

      //Background Images
            if (fTemp >= 70) {
              $('body').css('background-image', 'url(https://images.unsplash.com/photo-1421091242698-34f6ad7fc088?crop=entropy&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1300)')
            } else if (fTemp < 70 && tempF >= 50) {
              $('body').css('background-image', 'url(https://images.unsplash.com/photo-1421091242698-34f6ad7fc088?crop=entropy&fit=crop&fm=jpg&h=750&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1300)')
            } else if (fTemp < 50 && tempF >= 40) {
              $('body').css('background-image', 'url(https://images.unsplash.com/photo-1445561696415-deadc6a2adaa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=283323ef56689fd7d1ee25f01f113e6d)')
            } else if (fTemp > 39) {
              $('body').css('background-image', 'url(https://images.unsplash.com/photo-1414170562806-9d670e90c091?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=f8c6383e1ce6e90ad9713d119ab8e34f)')
            } else {
              $('body').css('background-image', 'url(https://images.unsplash.com/photo-1414170562806-9d670e90c091?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=f8c6383e1ce6e90ad9713d119ab8e34f)')
            }

      //Toggle
      $("#tempToggle").click(function(){

        if (tempToggle === true) {
          $("#tempNow").html(cTemp);
          tempToggle = false;
        } else {
          $('#tempNow').html(fTemp);
          tempToggle = true;
        }
      });
    });
  }); // Geo Location
}
}); // Document Ready
