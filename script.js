//VARIABLES


//API Keys



//Ajax Calls / Functions

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