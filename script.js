//VARIABLES
//var searchzip= $("#zipButton").val().trim();

//API Keys



//Ajax Calls / Functions

//var searchzip = "43215" ;  //HARD CODED; need to determine user zip, then associated zip codes
function grabZip(searchZip) {
    $.ajax({ //Current Day & City
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
            var brewUrl = $("<a>")/*.attr("href", response[i].website_url)*/.attr("id", "webEl").html(response[i].website_url);
           // linkPreview(response[i].website_url);

            newCard.append(brewName);
            newCard.append(brewType);
            newCard.append(brewAddress);
            newCard.append(brewPhone);
            newCard.append(brewUrl);
            newCard.append(imageEl);

            $("body").append(newCard);
        }
    });
}

//end click handler function

$("#submitZip").on("click", function (event) {
    event.preventDefault();
    var zipC = $("#zipButton").val();
    grabZip(zipC);
});

//returns jquery object of website image given website url
function linkPreview(barLink) {
    // link api query
    var linkApiKey = "add99689022bb0b11c5fd0a126838bc8";
    var linkQuery = "http://api.linkpreview.net/?key=" + linkApiKey + "&q=" + barLink;

    // TODO get the requested link from the dom
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

grabZip("43215");
linkPreview("google.com");