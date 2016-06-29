var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");


//Post - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);


//User - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);


User.findOne({name: "Harry Potter"}, function(err,foundUser) {
    if(err) {
        console.log(err);
    } else {
        console.log(foundUser);
    }
});

// var newUser = new User({
//     email: "harry@hogwarts.edu",
//     name: "Harry Potter"
// });
//
// newUser.posts.push({
//     title: "How to fly a broomstick?",
//     content: "Just kidding! If you're reading this, you're a muggle!"
// });
//
// newUser.save(function(err,user) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });


// var newPost = new Post({
//     title: "Reflections on Apples!",
//     content: "They are delicious"
// });
//
// newPost.save(function(err,post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });