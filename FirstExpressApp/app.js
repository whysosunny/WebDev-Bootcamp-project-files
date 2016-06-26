var express = require("express");
var app = express();

app.get('/',function(req,res) {
    res.send("Hi there! Welcome to my assignment!");
});

app.get("/speak/:animal", function(req,res) {
    var animal = req.params.animal.toLowerCase();

    var saying = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human"
    };

    res.send("The " +animal +" says " +saying[animal]);
});

app.get("/repeat/:word/:times",function(req,res) {
    var word = req.params.word;
    var times = Number(req.params.times);

    function repeat(word, times) {
        var outString = "";
        for(var i=0; i<times; i++) {
            outString += word + " ";
        }
        return outString;
    }

    res.send(repeat(word,times));
});

app.get("*", function(req,res) {
    res.send("This page doesn't exist! What are you doing with your life!?");
});

app.listen(3000,function() {
    console.log("App is up on port 3000");
});