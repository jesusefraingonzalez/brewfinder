
//VARIABLES


//API Keys



//Functions

// get user's GEOLOCATION, LAT & LONG

function userLocation() {
    if (navigator.geolocation) {

       navigator.geolocation.getCurrentPosition(showPosition);
        } 
        else {
          alert("Geolocation is not supported by this browser.");
        }
      }


// This will get called after getCurrentPosition()
function showPosition(position) {
    // Grab coordinates from the given object
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    console.log(lat,lon); //checkpoint

 // Call the distance function, passing on the coordinates 
 distance(lat, lon);
}

function distance(lat, lon) {
 
};




//AJAX Calls

// initialize open brew api call by user's state; calculate distance

$.ajax({ //Current Day & City
    
    url: "https://api.openbrewerydb.org/breweries?by_state=" + userstate + "&per_page=50",
    method: "GET"
    })
    .then(function(response) {
        console.log(response); 
        //for each 
            var brewlon = response.list.longitude 
            var brewlat = response.list.latitude 

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
=======
// JA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAH4AAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAzAAAABwAAAAEAAAAEAAAAJqGtdFpFrM2wYNPw_uyJoqnAAAAv90qsy_0wJLOkCdIsXZvLp4EVD9IfkIFI5U9Ze49UYdR2RCmilXEep7ljRaX_3hgClBvL8Scn8tXCkRsD2gW58bSc1wdvIxarb4_LatPvsW2I9J-94cUxCzkeGfgDQQ4BA9Ivu7m70UW9IQbejoCW7YFJn5R36PCXabwigA_4ijjBtQBSabTdNo_DR4lB6GQPdTkKb70lI_DWf21-dKU-60zpa0xtYgADAAAADmwkcQJnjXH8fFynSQAAABiMGQ4NTgwMy0zOGEwLTQyYjMtODA2ZS03YTRjZjhlMTk2ZWU



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


