
//VARIABLES
//var searchzip= $("#zipButton").val().trim();

//API Keys



//Ajax Calls / Functions

//$("#zipButton").on("click", function (event){  //need to match id to the input button
//event.preventDefault();

//var searchzip = "43215" ;  //HARD CODED; need to determine user zip, then associated zip codes
function grabZip(searchZip) {
    $.ajax({ //Current Day & City
        url: "https://api.openbrewerydb.org/breweries?by_postal=" + searchZip,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);  // DRAFT this is just here for checks during development

            //    for (var i = 0; i < response.length; i++) { //Need another loop/function to decide which breweries are in the recommended list based on distance
            var barLink;
            for (var i = 0; i < response.length; i++) { //DRAFT.  
                //appending data to brewery cards
                $("#brewNameEl").append("<p>" + response[i].name + "<p>");
                $("#brewType").append("<p>" + response[i].brewery_type + "<p>");
                $("#addressEl").append("<p>" + response[i].street + "<p>");
                $("#addressEl").append("<p>" + response[i].city + "<p>"); //these should probably all be divs not <p's>
                $("#addressEl").append("<p>" + response[i].state + "<p>");
                $("#phoneEl").append("<p>" + response[i].phone + "<p>"); //this will need formatting (area)-555-5555
                $("#webEl").append("<p>" + response[i].website_url + "<p>");
                //  $("#").append("<img src>" + TBD + "</img>");  // line for appending image based on type
            }

            //};  //end outer loop      
        });

}

//end click handler function

$("#submitZip").on("click", function (event) {
    event.preventDefault();
    var zipC = $("#zipButton").val();

    grabZip(zipC);
});

$("#webEl").click(function (event) {
    event.preventDefault();
    console.log($(this));
    var barLink = $(this).val();
    // link api query
    var linkApiKey = "add99689022bb0b11c5fd0a126838bc8";
    var linkQuery = "http://api.linkpreview.net/?key=" + linkApiKey + "&q=" + barLink;

    // TODO get the requested link from the dom

    // ajax query to get the link preview from the api
    $.ajax({
        url: linkQuery,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
});



grabZip("43215");