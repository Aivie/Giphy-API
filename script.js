$(document).ready(function() {
    $('#submit').click(function() {
        var q = $('#query').val();
        getGiphyGifs(q, function(data) {
            $("#search-results").empty();
            for (var i = 0; i < data.length; i++) {
                $("#search-results").append("<a href='" + data[i].images.original.url + "' target='_blank'>" + "<img src = '" + data[i].images.fixed_height_downsampled.url + "'>");
            }
        });
    });
})