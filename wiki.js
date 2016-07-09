$(document).ready();
//function created to autocomplete search results as user types in search keywords
function searchWiki(request) {
  
  //var for api url
  var api = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+request.term+'&limit=10&namespace=0&format=json&callback=?'
  

  // .GET request for JSON using var api and 'data' as a parameter
  $.getJSON(api, function (data) {
    //initializing results window with blank first.
    $("#results").html("");


    //for loop to loop through JSON data 
    for(var i = 0; i < data[1].length; i++) {
      
      //for each data result returned, a new div is appended to the #resultList div. Bootstrap classes given for effects.
      $("#results").append(
        "<a href='"+data[3][i]+"' target='_blank'><div class='searchresult fadeMe noshow'><h4>"+data[1][i]+"</h4><p>"+data[2][i]+"</p></div></a>"
      )
    }
//No effects
  });
}

//Search keywords from form are passed thru the searchWiki function via autocomplete'
$( "#search" ).autocomplete({
  source: searchWiki,
});

