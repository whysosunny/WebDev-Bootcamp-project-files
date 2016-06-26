var express = require("express");
var app = express();

var arr = [];

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/",function(req,res) {
    res.render("home");
});

app.get("/fallinlovewith/:something",function(req,res) {
    var something = req.params.something;
    console.log(something);
    arr.push(something);
    console.log(arr);
    res.render("love", {
        somethingVar: something,
        arr: arr
    });
});


app.listen(3000,function() {
    console.log("App is ready at port: 3000!");
});