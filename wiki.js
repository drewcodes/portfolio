$(document).ready();
function searchWiki(request) {
  
  var api = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+request.term+'&limit=10&namespace=0&format=json&callback=?';
 
  $.getJSON(api, function (data) {
    $("#results").html(""); 
    for(var i = 0; i < data[1].length; i++) {
      $("#results").append(
        "<a href='"+data[3][i]+"' target='_blank'><div class='searchresult fadeMe noshow'><h4>"+data[1][i]+"</h4><p>"+data[2][i]+"</p></div></a>"
      )
    }
  });
}
$( "#search" ).autocomplete({
  source: searchWiki,
});

