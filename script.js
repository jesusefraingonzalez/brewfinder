//VARIABLES

var searchZip;

var selectBrewery;

var saveList = []; //empty array for list of previously chosen breweries
<<<<<<< HEAD

=======
>>>>>>> 3e6cea9796360dac393abf65a5a9659d1860222e



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
            var brewAddress = $("<p>").attr("id", "addressEl").html(response[i].street + " " + response[i].city + " " + response[i].state + " " + response[i].postal_code);
            var brewPhone = $("<p>").attr("id", "phoneEl").html("(" + response[i].phone.substring(0, 3) + ") " + response[i].phone.substring(3, 6) + "-" + response[i].phone.substring(6, 10));
            var brewUrl = $("<a>").attr("href", response[i].website_url).attr("id", "webEl").html(response[i].website_url)
            var footer = $("<div>").attr("class", "uk-card-footer"); //card footer
<<<<<<< HEAD
            var brewChoice = $("<a href>").attr("class", "uk-button uk-button-text").attr("class", "selectBtn").text("Select"); //.attr("data-set", response[i]); 
            linkPreview(response[i].website_url);
=======
            //adding select button and attaching response data to data-set attribute
            var brewChoice = $("<button>").attr("class", "uk-button uk-button-default").attr("class", "selectBtn").text("Favorite"); //.attr("data-set", response[i]); 

            //var brewChoice = $("<button>").attr("class", "uk-button uk-button-default").attr("class", "selectBtn"); 
            brewChoice.attr("data-name", response[i].name); //adding brew name data attribute to store on click
            brewChoice.attr("data-info", JSON.stringify(response[i])); //adding complete data object to call on click
            // linkPreview(response[i].website_url);
>>>>>>> 3e6cea9796360dac393abf65a5a9659d1860222e


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

<<<<<<< HEAD
        };
=======

        }
        $(".selectBtn").click(function (event) {

            event.preventDefault();
            // console.log("hello");
        
            //capturing brew name from data attribute; storing name in array
            var saveName = $(this).attr("data-name");
            // console.log($(this));
            saveList.push(saveName);
        
            // save in localStorage under key "index"
            localStorage.setItem("index", saveName);
        
        }); //end select button click handler function
>>>>>>> 3e6cea9796360dac393abf65a5a9659d1860222e
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
<<<<<<< HEAD
        var image = $("<img>").attr("src", response.image);
        $("mainContainer").prepend(image);
=======
        return $("<img>").attr("src", response.image);
        // $("body").append(image);
>>>>>>> 3e6cea9796360dac393abf65a5a9659d1860222e
    });
}




//EVENTS

// click-handler for getting the desired zip code
$(document).ready(function () {

<<<<<<< HEAD
    $("#searchBtn").click(function (event) {  //Added button ID
        event.preventDefault();
=======
    //emptying html elements from previous search
    $("#mainContainer").empty();
>>>>>>> 3e6cea9796360dac393abf65a5a9659d1860222e

        //emptying html elements from previous search
        $("#mainContainer").empty();

        searchZip = $("input").val().trim(); //reads the input from the user
        breweryInfo(searchZip); //calls the function breweryInfo to generate brewery data

    }); //end search button click handler function

}); //end document ready function

<<<<<<< HEAD
// click-handler for selecting brewery & saving to local storage  STILL WORKING ON THIS
$(".selectBtn").click(function (event) {
    event.preventDefault();
=======
// click-handler for selecting brewery & saving to local storage 



>>>>>>> 3e6cea9796360dac393abf65a5a9659d1860222e



// load local storage data when Favorites button is clicked
$("#favoritesBtn").click(function (event, saveList) {  //need Favorites button
    event.preventDefault();
    console.log("hello");
    for (var i = 0; i < saveList.length; i++) {

        var addFavorite = $([i]).val(localStorage.getItem([i]));

        var favList = $("<div>").attr("class", "uk-card-body");
        favList.append(addFavorite)
        $("#favorites").append.favList //appending to Favorites div

<<<<<<< HEAD
    // save in localStorage
    localStorage.setItem(number, name);

=======
    };
>>>>>>> 3e6cea9796360dac393abf65a5a9659d1860222e

}); //end Favorites button function


// linkPreview("google.com");
breweryInfo("43202");