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
            var brewType = $("<p>" + "<strong>Type: </strong>" + response[i].brewery_type + "</p>").attr("id", "brewType"); 
            var brewAddress = $("<p>" + "<strong>Address: </strong>" + response[i].street + "</p>").attr("id", "addressEl");
            var brewCity = $("<p>" + "<strong>City: </strong>" + response[i].city + ", " + response[i].state + " " + response[i].postal_code + "</p>").attr("id", "cityEl"); 
            var brewPhone = $("<p>" + "<strong>Phone: </strong>" + ("(" + response[i].phone.substring(0, 3) + ") " + response[i].phone.substring(3, 6) + "-" + response[i].phone.substring(6, 10)) +"</p>").attr("id", "phoneEl");
            var brewUrl = $("<a>").attr("href", response[i].website_url).attr("id", "webEl").html(response[i].website_url)
            var footer = $("<div>").attr("class", "uk-card-footer"); //card footer
            //adding select button and attaching response data to data-set attribute
            var brewChoice = $("<button>").attr("class", "uk-button uk-button-default").attr("class", "selectBtn").text("Favorite"); //.attr("data-set", response[i]); 

            //var brewChoice = $("<button>").attr("class", "uk-button uk-button-default").attr("class", "selectBtn"); 
            brewChoice.attr("data-name", response[i].name); //adding brew name data attribute to store on click
            brewChoice.attr("data-info", JSON.stringify(response[i])); //adding complete data object to call on click


            newCard.append(header);
            header.append(brewName);
            newCard.append(brewInfo);
            newCard.append(brewType);
            newCard.append(brewAddress);
            newCard.append(brewCity);
            newCard.append(brewPhone);
            newCard.append(brewUrl);
            newCard.append(footer);
            footer.append(brewChoice);
         //   newCard.append(imageEl);

            $("#mainContainer").append(newCard); //appending New Cards to main

           
           // If/Else to call Link Preview for those breweries with websites; placeholder image for those without urls

            if (response[i].website_url === "") { // the "" is from the opencrewery data object
               
                var noURL = $("<img>").attr("src", "https://cdn5.vectorstock.com/i/1000x1000/87/84/banner-with-picture-of-the-brewery-vector-1948784.jpg").width("150px").height("150px"); 
                footer.append(noURL)

            } else {
                linkPreview(response[i].website_url); //calls linkPreview function
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
                                    //return $("<img>").attr("src", response.image);
                                  //  $("body").append(image);

                                    var imageEl = $("<img>").attr("src", response.image).width("150px").height("150px"); 
                            
                                    footer.append(imageEl);
                                });
                            }


        } //end loop

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

