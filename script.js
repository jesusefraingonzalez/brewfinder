
//VARIABLES
//var searchzip= $("#zipButton").val().trim();

//API Keys



//Ajax Calls / Functions

//$("#zipButton").on("click", function (event){  //need to match id to the input button
    //event.preventDefault();
    
    //var searchzip = "43215" ;  //HARD CODED; need to determine user zip, then associated zip codes
    function grabZip (searchZip) {
        $.ajax({ //Current Day & City
            
        
            url: "https://api.openbrewerydb.org/breweries?by_postal=" + searchZip,
            method: "GET"
            })
            .then(function(response) {
                console.log(response);  // DRAFT this is just here for checks during development
        
            //    for (var i = 0; i < response.length; i++) { //Need another loop/function to decide which breweries are in the recommended list based on distance
        
                        for (var i = 0; i < response.length; i++) { //DRAFT.  
        
        
                            
        
                            //appending data to brewery cards
                            $("#brewNameEl").append("<p>" + response[i].name + "<p>");
                            $("#brewType").append("<p>" + response[i].brewery_type + "<p>");
                            $("#addressEl").append("<p>" + response[i].street + "<p>");
                            $("#addressEl").append("<p>" + response[i].city + "<p>"); //these should probably all be divs not <p's>
                            $("#addressEl").append("<p>" + response[i].state + "<p>");
                            $("#phoneEl").append("<p>" + response[i].phone + "<p>"); //this will need formatting (area)-555-5555
                            $("#webEl").append("<p>" + response[i].website_url + "<p>");
                            //  $("#").append("<img src>" + TBD + "</img>");  // line for appending image based on type
                                    
        
                        
                        }
               //};  //end outer loop      
        
            });
        
        }
        
        //end click handler function
        
        $("#submitZip").on("click", function(event) {
            event.preventDefault();
            var zipC = $("#zipButton").val();
        
            grabZip(zipC);
          });
        
        // JA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAH4AAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAzAAAABwAAAAEAAAAEAAAAJqGtdFpFrM2wYNPw_uyJoqnAAAAv90qsy_0wJLOkCdIsXZvLp4EVD9IfkIFI5U9Ze49UYdR2RCmilXEep7ljRaX_3hgClBvL8Scn8tXCkRsD2gW58bSc1wdvIxarb4_LatPvsW2I9J-94cUxCzkeGfgDQQ4BA9Ivu7m70UW9IQbejoCW7YFJn5R36PCXabwigA_4ijjBtQBSabTdNo_DR4lB6GQPdTkKb70lI_DWf21-dKU-60zpa0xtYgADAAAADmwkcQJnjXH8fFynSQAAABiMGQ4NTgwMy0zOGEwLTQyYjMtODA2ZS03YTRjZjhlMTk2ZWU
        
        // get user's geolocation, lat & long
        // open brew api call
        // get lat and long from open brew
        // uber api call using user location and brewery location
        // open uber app??
        
        //var query = "https://api.uber.com/v1.2/requests/estimate";
        
        //$.ajax({
           // url: query,
           // method: "POST",
          //  data: {
          //      "start_latitude": 37.7752278,
           //     "start_longitude": -122.4197513,
          //      "end_latitude": 37.7773228,
           //     "end_longitude": -122.4272052
           // }
        //}).then(function(response){
            //console.log(response);
        //});
        