// JA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAH4AAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAzAAAABwAAAAEAAAAEAAAAJqGtdFpFrM2wYNPw_uyJoqnAAAAv90qsy_0wJLOkCdIsXZvLp4EVD9IfkIFI5U9Ze49UYdR2RCmilXEep7ljRaX_3hgClBvL8Scn8tXCkRsD2gW58bSc1wdvIxarb4_LatPvsW2I9J-94cUxCzkeGfgDQQ4BA9Ivu7m70UW9IQbejoCW7YFJn5R36PCXabwigA_4ijjBtQBSabTdNo_DR4lB6GQPdTkKb70lI_DWf21-dKU-60zpa0xtYgADAAAADmwkcQJnjXH8fFynSQAAABiMGQ4NTgwMy0zOGEwLTQyYjMtODA2ZS03YTRjZjhlMTk2ZWU

// get user's geolocation, lat & long
// open brew api call
// get lat and long from open brew
// uber api call using user location and brewery location
// open uber app??

var redirectURI = "http://localhost";
var clientID = "pOdCvyGkBF3wEiz-JDmjtctiegHce-_N";
var query = "https://api.uber.com/v1.2/requests/estimate";
var auth = "https://login.uber.com/oauth/v2/authorize?client_id=" + clientID + "&response_type=code&redirect_uri=" + redirectURI;




$.ajax({
    url: query,
    headers: {
        'Authorization': "Bearer JA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAH4AAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAzAAAABwAAAAEAAAAEAAAAJqGtdFpFrM2wYNPw_uyJoqnAAAAv90qsy_0wJLOkCdIsXZvLp4EVD9IfkIFI5U9Ze49UYdR2RCmilXEep7ljRaX_3hgClBvL8Scn8tXCkRsD2gW58bSc1wdvIxarb4_LatPvsW2I9J-94cUxCzkeGfgDQQ4BA9Ivu7m70UW9IQbejoCW7YFJn5R36PCXabwigA_4ijjBtQBSabTdNo_DR4lB6GQPdTkKb70lI_DWf21-dKU-60zpa0xtYgADAAAADmwkcQJnjXH8fFynSQAAABiMGQ4NTgwMy0zOGEwLTQyYjMtODA2ZS03YTRjZjhlMTk2ZWU",
        'Accept-Language': "en_US",
        'Content-Type': "application/json",
        'Access-Control-Request-Headers': "*",
    },
    type: "POST",
    data: {
        "start_latitude": 37.7752278,
        "start_longitude": -122.4197513,
        "end_latitude": 37.7773228,
        "end_longitude": -122.4272052
    }

}).then(function (response) {
    console.log(response);
});

