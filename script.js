//VARIABLES

var searchZip;

var selectBrewery;

var saveList = []; //empty array for list of previously chosen breweries




//FUNCTIONS

function breweryInfo(searchZip) {
    $.ajax({
        url: "https://api.openbrewerydb.org/breweries?by_postal=" + searchZip,
        method: "GET"
    }).then(function (response) {
        // console.log(response);  
        for (var i = 0; i < response.length; i++) {
            //create data for brewery cards
            var newCard = $("<div>").attr("class", "uk-card uk-card-default uk-width-1-2@m"); //card container
            var header = $("<div>").attr("class", "uk-card-header"); //card header
            var brewName = $("<h3>").attr("id", "brewNameEL").attr("class", "uk-card-title uk-margin-remove-bottom").html(response[i].name);
            var brewInfo = $("<div>").attr("uk-card-body"); //card body
            var brewType = $("<p>").attr("id", "brewType").html(response[i].brewery_type);
            var brewAddress = $("<p>").attr("id", "addressEl").html(response[i].street + " " + response[i].city + " " + response[i].state + " " + response[i].postal_code + "</p>");
            var brewPhone = $("<p>").attr("id", "phoneEl").html("(" + response[i].phone.substring(0, 3) + ") " + response[i].phone.substring(3, 6) + "-" + response[i].phone.substring(6, 10));
            var brewUrl = $("<a>").attr("href", response[i].website_url).attr("id", "webEl").html(response[i].website_url);
            //adding select button and attaching response data to data-set attribute
            var footer = $("<div>").attr("class", "uk-card-footer"); //card footer
            var brewChoice = $("<a href>").attr("class", "uk-button uk-button-text").attr("class", "selectBtn").text("Select"); //.attr("data-set", response[i]); 
            linkPreview(response[i].website_url);


            newCard.append(header);
            header.append(brewName);
            newCard.append(brewInfo);
            newCard.append(brewType);
            newCard.append(brewAddress);
            newCard.append(brewPhone);
            newCard.append(brewUrl);
            newCard.append(footer);
            footer.append(brewChoice);
            // newCard.append(imageEl);

            $("#mainContainer").append(newCard); //appending New Cards to main

        };
    });
    
};

//appends website image given url using link preview api
function linkPreview(barLink) {
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
        var image = $("<img>").attr("src", response.image);
        $("mainContainer").prepend(image);
    });
}




//EVENTS

// click-handler for getting the desired zip code
$(document).ready(function () {

    $("#searchBtn").click(function (event) {  //Added button ID
        event.preventDefault();

        //emptying html elements from previous search
        $("#brewNameEl").empty();
        $("#brewType").empty();
        $("#addressEl").empty();
        $("#phoneEl").empty();
        $("#webEl").empty();

        searchZip = $("input").val().trim(); //reads the input from the user
        breweryInfo(searchZip); //calls the function breweryInfo to generate brewery data

    }); //end search button click handler function

}); //end document ready function

// click-handler for selecting brewery & saving to local storage  STILL WORKING ON THIS
$(".selectBtn").click(function (event) {
    event.preventDefault();

    brewChoice;

    selectBrewery; //this needs to be a data object/card of previously selected?
    saveList; //needs to push data object to the empty array?

    var name = $(this).siblings("#brewNameEl").val();
    var number = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(number, name);


}); //end select button click handler function


