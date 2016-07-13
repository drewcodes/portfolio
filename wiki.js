$(document).ready(function () {
    $('#search').click(function () {
        //Assigns searchTerm to a var
        var searchTerm = $('#searchTerm').val();
        //Assigns API into a var
        var api = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&limit=10&namespace=0&format=json&callback=?';
        $.ajax({
            type: 'GET'
            , url: api
            , dataType: 'json'
            , async: false
            , success: function (data) {
                $('#output').html('');
                for (var i = 0; i < data[1].length; i++) {
                    $('#output').append("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                }
                $('#searchTerm').val('');
            }
            , error: function (errorMessage) {
                alert('Error!');
            }
        });
    });
    //Allows ENTER instead of clicking SUBMIT
    $('#searchTerm').keypress(function (e) {
        if (e.which === 13) {
            $("#search").click();
        }
    });
});
