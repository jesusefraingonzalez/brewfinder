// api query
var apiKey = "add99689022bb0b11c5fd0a126838bc8";
var link = "http://www.google.com";
var query = "http://api.linkpreview.net/?key=" + apiKey + "&q=" + link;

// TODO get the requested link from the dom

// ajax query to get the link preview from the api
$.ajax({
    url: query,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
