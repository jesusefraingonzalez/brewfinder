// click-handler for getting the desired zip code
// TODO : need to determine user zip, then associated zip codes
var zipCode;
$("button").click(function (event) {
    event.preventDefault();

    zipCode = $("input").val().trim();
    breweryInfo(zipCode);
=======
    
    var searchzip = "97210" ;  //HARD CODED; need to determine user zip, then associated zip codes

$.ajax({ //Current Day & City
    

    url: "https://api.openbrewerydb.org/breweries?by_postal=" + searchzip,
    method: "GET"
    })
    .then(function(response) {
        console.log(response);  // DRAFT this is just here for checks during development

    //    for (var i = 0; i < response.length; i++) { //Need another loop/function to decide which breweries are in the recommended list based on distance

                for (var i = 0; i < 11; i++) { //DRAFT.  

                    //appending data to brewery cards
                    $("#brewNameEl").append("<p>" + response.list[i].name + "<p>");
                    $("#brewType").append("<p>" + response.list[i].brewery_type + "<p>");
                    $("#addressEl").append("<p>" + response.list[i].street + "<p>");
                    $("#addressEl").append("<p>" + response.list[i].city + "<p>"); //these should probably all be divs not <p's>
                    $("#addressEl").append("<p>" + response.list[i].state + "<p>");
                    $("#phoneEl").append("<p>" + response.list[i].phone + "<p>"); //this will need formatting (area)-555-5555
                    $("#webEl").append("<p>" + response.list[i].website_url + "<p>");
                    //  $("#").append("<img src>" + TBD + "</img>");  // line for appending image based on type
                            

                };

     //   };  //end outer loop      

    });

}); //end click handler function
=======
// JA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAH4AAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAzAAAABwAAAAEAAAAEAAAAJqGtdFpFrM2wYNPw_uyJoqnAAAAv90qsy_0wJLOkCdIsXZvLp4EVD9IfkIFI5U9Ze49UYdR2RCmilXEep7ljRaX_3hgClBvL8Scn8tXCkRsD2gW58bSc1wdvIxarb4_LatPvsW2I9J-94cUxCzkeGfgDQQ4BA9Ivu7m70UW9IQbejoCW7YFJn5R36PCXabwigA_4ijjBtQBSabTdNo_DR4lB6GQPdTkKb70lI_DWf21-dKU-60zpa0xtYgADAAAADmwkcQJnjXH8fFynSQAAABiMGQ4NTgwMy0zOGEwLTQyYjMtODA2ZS03YTRjZjhlMTk2ZWU

// get user's geolocation, lat & long
// open brew api call
// get lat and long from open brew
// uber api call using user location and brewery location
// open uber app??

var query = "https://api.uber.com/v1.2/requests/estimate";

$.ajax({
    url: query,
    method: "POST",
    data: {
        "start_latitude": 37.7752278,
        "start_longitude": -122.4197513,
        "end_latitude": 37.7773228,
        "end_longitude": -122.4272052
    }
}).then(function(response){
    console.log(response);

});

function breweryInfo(searchZip) {
    $.ajax({
        url: "https://api.openbrewerydb.org/breweries?by_postal=" + searchZip,
        method: "GET"
    }).then(function (response) {
        // console.log(response);  // DRAFT this is just here for checks during development
        for (var i = 0; i < response.length; i++) { //DRAFT.  
            //create data for brewery cards
            var newCard = $("<div>").attr("class", "uk-card-body");
            var brewName = $("<p>").attr("id", "brewNameEL").html(response[i].name);
            var brewType = $("<p>").attr("id", "brewType").html(response[i].brewery_type);
            var brewAddress = $("<p>").attr("id", "addressEl").html(response[i].street + " " + response[i].city + " " + response[i].state + " " + response[i].postal_code + "</p>");
            var brewPhone = $("<p>").attr("id", "phoneEl").html("(" + response[i].phone.substring(0, 3) + ") " + response[i].phone.substring(3, 6) + "-" + response[i].phone.substring(6, 10));
            var brewUrl = $("<a>").attr("href", response[i].website_url).attr("id", "webEl").html(response[i].website_url);
           // linkPreview(response[i].website_url);

            newCard.append(brewName);
            newCard.append(brewType);
            newCard.append(brewAddress);
            newCard.append(brewPhone);
            newCard.append(brewUrl);
            // newCard.append(imageEl);

            $("body").append(newCard);
        }
    });
}

//appends website image given url using link preview api
function linkPreview(barLink) {
    // link-preview api key and query
    var linkApiKey = "add99689022bb0b11c5fd0a126838bc8";
    var linkQuery = "http://api.linkpreview.net/?key=" + linkApiKey + "&q=" + barLink;

    // ajax query to get the link-preview image from the website
    $.ajax({
        url: linkQuery,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var image = $("<img>").attr("src", response.image);
        $("body").append(image);
    });
}