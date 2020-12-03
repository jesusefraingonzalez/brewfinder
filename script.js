//VARIABLES

var searchZip;

var selectBrewery;

var saveList = []; //empty array for list of previously chosen breweries

//FUNCTIONS
//appends website image given url using link preview api
function linkPreview(barLink, footer) {
    // link-preview api key and query
    var linkApiKey = "add99689022bb0b11c5fd0a126838bc8";
    var linkQuery = "http://api.linkpreview.net/?key=" + linkApiKey + "&q=" + barLink;
    console.log(linkQuery);

    // ajax query to get the link-preview image from the website
    $.ajax({
        url: linkQuery,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var imageEl = $("<img>").attr("src", response.image).attr("class", "uk-align-right").width("150px").height("150px");
        footer.append(imageEl);
    });
};

function createCard(card) {
    //create data for brewery cards
    var newCard = $("<div>").attr("class", "uk-card uk-card-default uk-width-1-2@m"); //card container
    var header = $("<div>").attr("class", "uk-card-header"); //card header
    var brewName = $("<h3>").attr("id", "brewNameEL").attr("class", "uk-card-title uk-margin-remove-bottom").html(card.name);
    var brewInfo = $("<div>").attr("uk-card-body"); //card body

    //var brewImage = $("<img>").attr("src", "images/drunkweb.png").width("150px").height("150px");


    var brewType = $("<p>" + "<strong>Type: </strong>" + card.brewery_type + "</p>").attr("id", "brewType");
    var brewAddress = $("<p>" + "<strong>Address: </strong>" + card.street + "</p>").attr("id", "addressEl");
    var brewCity = $("<p>" + "<strong>City: </strong>" + card.city + ", " + card.state + " " + card.postal_code + "</p>").attr("id", "cityEl");
    var brewPhone = $("<p>" + "<strong>Phone: </strong>" + ("(" + card.phone.substring(0, 3) + ") " + card.phone.substring(3, 6) + "-" + card.phone.substring(6, 10)) + "</p>").attr("id", "phoneEl");
    var brewUrl = $("<a>").attr("href", card.website_url).attr("id", "webEl").html(card.website_url)
    var footer = $("<div>").attr("class", "uk-card-footer"); //card footer

    //append info to the card
    newCard.append(header);
    header.append(brewName);
    newCard.append(brewInfo);
    newCard.append(brewType);
    newCard.append(brewAddress);
    newCard.append(brewCity);
    newCard.append(brewPhone);
    newCard.append(brewUrl);
    newCard.append("<br>");

    //newCard.append(brewImage);

    newCard.append(footer);
    newCard.css("margin", "20px");
    return newCard;
}



function breweryInfo(searchZip) {
    $.ajax({
        url: "https://api.openbrewerydb.org/breweries?by_postal=" + searchZip,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < response.length; i++) {
            //create data for brewery cards
            var newCard = createCard(response[i]);
            var footer = $("<div>").attr("class", "uk-card-footer"); //card footer

            // adding select button and attaching response data to data-set attribute
            var brewChoice = $("<button>").attr("class", "uk-button uk-button-default selectBtn").text("Add to Favorites"); //.attr("data-set", response[i]); 
            brewChoice.attr("data-name", response[i].name); //adding brew name data attribute to store on click
            brewChoice.attr("data-info", JSON.stringify(response[i])); //adding complete data object to call on click

            newCard.append(footer);
            footer.append(brewChoice);
            $("#mainContainer").append(newCard); //appending New Cards to main

            // If/Else to call Link Preview for those breweries with websites; placeholder image for those without urls
            if (response[i].website_url === "") { // the "" is from the openbrewery data object

          // var noURL = $("<img>").attr("src", "./images/drunkweb.png").width("150px").height("150px");
                var noURL = $("<img>").attr("src", "https://media.istockphoto.com/vectors/vector-white-and-yellow-vintage-brewing-company-label-vector-id606675834?k=6&m=606675834&s=612x612&w=0&h=lKCSg41oTyyAdhnnW8CYREZoCFP8kHX-Za8d7ybigFQ=").attr("class", "uk-align-right").width("150px").height("150px");
                
                footer.append(noURL);


            } else {
                linkPreview(response[i].website_url, footer); //calls linkPreview function
            };
        }; //end loop



        // Adding items to favorite's with click event

        $(".selectBtn").click(function (event) {
            event.preventDefault();

            // gets brewery name saved in button dataset
            var thisBrewery = $(this)[0].dataset.name;

            // if the brewery is already in the localStorage favorites, leave this function
            if (localStorage.getItem(thisBrewery)) {
                return;
            }

            // save this brewery to local storage
            localStorage.setItem(thisBrewery, $(this)[0].dataset.info);

        }); //end select button click handler function
    });

};





//EVENTS

// click-handler for initiating search and clearing the main container from previous searches
$("#searchBtn").click(function (event) {
    event.preventDefault();
    //emptying html elements from previous search
    $("#mainContainer").empty();

    fullZip = $("input").val().trim(); //reads the input from the user
    var searchZip = fullZip.substring(0, 2); //reads the first few zipcode #s to generate from a wider search radius
    breweryInfo(searchZip); //calls the function breweryInfo to generate brewery data
}); //end search button click handler function





// load local storage data when Favorites button is clicked
$("#favoritesBtn").click(function (event) {  //need Favorites button
    event.preventDefault();
    $("#mainContainer").empty();
    $("#mainContainer").append('<h2 style="color: #f1e3bb">Favorites</h2>');

    // loops through all local storage keys and creates card for each favorite brewery
    for (var i = 0; i < localStorage.length; i++) {
        var favObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var newCard = createCard(favObject);
        $("#mainContainer").append(newCard);
    }
}); //end Favorites button function


