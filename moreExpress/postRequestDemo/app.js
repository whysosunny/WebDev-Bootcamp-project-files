var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var friendsArr = ["Rachel","Monica","Phoebe","Ross","Chandler","Joey"];

//Tell express to use bodyParser

app.use(bodyParser.urlencoded({extended: true}));

app.set("views","views");
app.set("view engine", "ejs");

app.get("/",function(req,res) {
    res.render("home");
});

app.get("/friends",function(req,res) {
    res.render("friends", {
        friends : friendsArr
    });
});

app.post("/addFriend", function(req,res) {
    var newFriend = req.body.newFriend;
    friendsArr.push(newFriend);
    res.redirect("/friends");
});

app.listen(3000,function(req,res) {
    console.log("App ready at port 3000");
});