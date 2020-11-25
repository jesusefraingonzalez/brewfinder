
//VARIABLES


//API Keys



//Functions

// get user's GEOLOCATION, LAT & LONG - WE ONLY NEED THIS IF WE DO A MAPPING API

// function userLocation() {
//     if (navigator.geolocation) {

//        navigator.geolocation.getCurrentPosition(showPosition);
//         } 
//         else {
//           alert("Geolocation is not supported by this browser.");
//         }
//       }


//     // This will get called after getCurrentPosition()
//     function showPosition(position) {
//         // Grab coordinates from the given object
//         var lat = position.coords.latitude;
//         var lon = position.coords.longitude;
//         console.log(lat,lon); //checkpoint

//     // Call the distance function, passing on the coordinates 
//     distance(lat, lon);
//     };

    
// // Calculates the distance between the user and the lat & lon subset of brewery listings
// function distance(lat, lon) {

//     };




//AJAX Calls

// initialize open brew api call by user's state; calculate distance

$.ajax({ //Grabs subset of breweries based on user's initial location input
    
    url: "https://api.openbrewerydb.org/breweries?by_postal_code=" + searchZip + "&per_page=50",
    method: "GET"
    })
    .then(function(response) {
        console.log(response); 

        var closestBrew = 


        //for each brewery element in the closestBrew array
            // var brewlon = response.longitude 
            // var brewlat = response.latitude 

    });



//click event to append brewery elements upon user entering their zipcode

$("#zipbutton").on("click", function (event){  //need to match id to the input button
    event.preventDefault();
    
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
                    $("#brewNameEl").append("<h6>" + response.list[i].name + "<h6> " + "</br>");
                            

                };

     //   };  //end outer loop      

    });

}); //end click handler function



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


