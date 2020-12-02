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
            var brewAddress = $("<p>").attr("id", "addressEl").html(response[i].street + " " + response[i].city + " " + response[i].state + " " + response[i].postal_code);
            var brewPhone = $("<p>").attr("id", "phoneEl").html("(" + response[i].phone.substring(0, 3) + ") " + response[i].phone.substring(3, 6) + "-" + response[i].phone.substring(6, 10));
            var brewUrl = $("<a>").attr("href", response[i].website_url).attr("id", "webEl").html(response[i].website_url)
            var footer = $("<div>").attr("class", "uk-card-footer"); //card footer
            //adding select button and attaching response data to data-set attribute
            var brewChoice = $("<button>").attr("class", "uk-button uk-button-default").attr("class", "selectBtn").text("Favorite"); //.attr("data-set", response[i]); 

            //var brewChoice = $("<button>").attr("class", "uk-button uk-button-default").attr("class", "selectBtn"); 
            brewChoice.attr("data-name", response[i].name); //adding brew name data attribute to store on click
            brewChoice.attr("data-info", JSON.stringify(response[i])); //adding complete data object to call on click
            // linkPreview(response[i].website_url);


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
        return $("<img>").attr("src", response.image);
        // $("body").append(image);
    });
}




//EVENTS

// click-handler for initiating search and clearing the main container from previous searches
$("#searchBtn").click(function (event) {

    //emptying html elements from previous search
    $("#mainContainer").empty();

        searchZip = $("input").val().trim(); //reads the input from the user
        breweryInfo(searchZip); //calls the function breweryInfo to generate brewery data

    }); //end search button click handler function





// load local storage data when Favorites button is clicked
$("#favoritesBtn").click(function (event, saveList) {  //need Favorites button
    event.preventDefault();
    console.log("hello");
    for (var i = 0; i < saveList.length; i++) {

        var addFavorite = $([i]).val(localStorage.getItem([i]));

        var favList = $("<div>").attr("class", "uk-card-body");
        favList.append(addFavorite)
        $("#favorites").append.favList //appending to Favorites div

    };

}); //end Favorites button function


// linkPreview("google.com");
//breweryInfo("43202");