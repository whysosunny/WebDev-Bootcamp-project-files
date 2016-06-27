var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat",catSchema)

//Add a new cat
// var george = new Cat({
//     name: "Gadda",
//     age: 5,
//     temperament: "God knows!"
// });
//
// george.save(function(err, cat) {
//     if(err) {
//         console.log("Something went wrong!");
//     } else {
//         console.log("We just saved a cat to the db");
//         console.log(cat);
//     }
// });

//Return all cats

Cat.find({ name: "Bubbles"},function(err,cats) {
    if(err) {
        console.log("Something went wrong.");
        console.log(err);
    } else {
        console.log(cats);
    }
});