$(document).ready(function(){
  //Created variables to represent coordinates.
  var lat;
  var lon;

  //this getJSON calls for the coordinates via an API. The rest of the code executes within this call function to display the JSON object data.
  $.getJSON('http://ip-api.com/json', function(yourLocation){

    lat = yourLocation.lat;
    lon = yourLocation.lon;

    //API
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=1c998cd7939b1c9031ba503704852c7b';

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
  });
  });
