function average(arr) {
    var sum = arr.reduce(function(prev,curr) {
        return prev+curr;
    });

    console.log(Math.round(sum/arr.length));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2); //should return 68