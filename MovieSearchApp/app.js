var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/",function(req,res) {
    res.render("search");
});

app.get("/results",function(req,res) {

    var searchString = req.query.searchTerm;
    if(!searchString) {
        searchString = "california";
    }

    var url = "http://www.omdbapi.com/?s=" +searchString;
    request(url, function(error,response,body) {
        var results = JSON.parse(body);
        if(!error && response.statusCode == 200) {
            res.render("results", {
                results: results.Search
            });
        } else {
            res.send("error!");
        }

    });
});



app.listen(3000,function() {
    console.log("Movie app has started at 3000");
});