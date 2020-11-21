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
        console.log(response);


    });

}); //end click handler function