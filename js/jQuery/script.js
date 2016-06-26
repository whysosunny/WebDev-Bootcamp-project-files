$("h1").click(function() {
    console.log("H1 is clicked!");
});

$("button").click(function() {
    console.log($(this).text());
});

var x;

$("input").keypress(function(event) {
    if(event.which === 13) {
        console.log("You've pressed 'Enter'");
        var inputElem = $("input");
        x = inputElem.val();
        inputElem.val("");
    }
});