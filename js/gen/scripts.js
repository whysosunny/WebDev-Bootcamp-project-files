//Age perfect square:

function ageResponse(age) {
    if(age<0) {
        console.log("Age is negative! Not allowed.");
    } else if(age === 21) {
        console.log("Happy 21st!");
    }
    if(age%2 !== 0) {
        console.log("Odd age!");
    }

    var sqrRoot = Math.round(Math.sqrt(age));
    if(age/sqrRoot === sqrRoot) {
        console.log("Perfect Square!");
    }

}


//While loop exercises:



function printSequence(a,b,callback) {
    while(a <=b) {
        callback(a);
        a++;
    }
    return "Done!";
}

//print all numbers between -10 and 19

// printSequence(-10,19, function(val) {
//     console.log(val);
// });


//Even numbers between 10 and 40:

// printSequence(10,40,function(val) {
//     if(val %2 === 0) {
//         console.log(val);
//     }
// });


//odd numbers between 300 and 333:

// printSequence(300,333, function(val) {
//     if(val%2 !==0) {
//         console.log(val);
//     }
// });


//divisible by 5 and 3 between 5 and 50:

// printSequence(5,50, function(val) {
//     if(val%5 === 0 && val%3 ===0) {
//         console.log(val);
//     }
// });


//Annoyomatic:

function startAnnoying() {
    var status = false;
    while(!status) {
        var answer = prompt("Are we there yet?");
        if(answer.split(" ").indexOf("yes") >= 0) {
            alert("YAY! We're here!!!");
            status = true;
        }
    }
}


//Functions problem set:

//Factorial:

function factorial(num) {
    var output = 1;
    for(var i= num; i>0; i--) {
        output = output * i;
    }
    return output;
}

function spinalToSnake(str) {
    var arr = str.split("");
    for(var i=0; i<arr.length; i++) {
        if(str[i] === "-") {
            arr.splice(i,1);
            arr.splice(i,0,"_");
        }
    }
    return arr.join("");
}

function spinalToSnake2(str) {
    return str.replace(/-/g, "_");;
}


//Arrays problem set:

function isUniform(arr) {
    var elem = arr[0];
    return arr.every(function(element) {
        return elem === element;
    });
}

function sumArray(arr) {
    return arr.reduce(function(prev,curr) {
        return prev+curr;
    });
}


function maxElem(arr) {
  return arr.reduce(function(prev,curr) {
      return (prev>curr) ? prev: curr;
  });
}

//Objects:

//Movie DB:
function Movie(name,rating,status) {
    this.title = name;
    this.rating = rating;
    this.hasWatched = status;
}

var schoolOfRock = new Movie("School Of Rock", 4, true);
var civilWar = new Movie("Captain America: Civil War", 4, false);
var bvs = new Movie("Batman Vs Superman", 2, false);
var silverLinings = new Movie("Silver Linings Playbook", 4.5, true);

var movieDb = [schoolOfRock,civilWar,bvs,silverLinings];


movieDb.forEach(function(elem) {
    var prefix = "";
    if(elem.hasWatched === true) {
        prefix = "You have watched ";

    } else {
        prefix = "You have not watched ";
    }

    // console.log(prefix +elem.title +" and it is rated " +elem.rating +" stars");
});































