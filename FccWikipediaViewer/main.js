$(document).ready(function() {
 
    var url = "https://en.wikipedia.org/w/api.php";
    $("#language").click(function() {
        if (document.getElementById("language").selectedIndex === 1) {
            url = "https://hu.wikipedia.org/w/api.php";
        } else {
            url = "https://en.wikipedia.org/w/api.php";
        }
    })
    
    $("#search").click(function() {
        var searchTerm = $("#search-box").val(); 
    
        $.ajax({
            type: "GET",  
            url: url,
            dataType: "jsonp",
            data: {
                action: "opensearch",
                search: searchTerm,
                format: "json"
                },
            success: function(data) {
                $("#search-results").html("");
                for (var i = 0; i < data[1].length; i++) {
                    $("#search-results").prepend("<div class='result-box'><h4>" + data[1][i] + "</h4>" + "<p>" + data[2][i] + "<a href=" + data[3][i] 
                    + " target='_blank'> Read more</a></p></div>");
                }
            },
            error: function() {
                alert("Oh-oh, something went wrong, please try again.")
            }
        })
    });
});