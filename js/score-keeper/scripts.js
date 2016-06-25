var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.getElementById("p1-score");
var p2Display = document.getElementById("p2-score");
var inputBox = document.getElementsByTagName("input")[0];
var maxScore = document.getElementById("winning-score");
var gameOver = false;
var winningScore = 5;

var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score+=1;
        if(p1Score === winningScore) {
            gameOver = true;
            p1Display.style.color = "green";
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score+=1;
        if(p2Score === winningScore) {
            gameOver = true;
            p2Display.style.color = "green";
        }
        p2Display.textContent = p2Score;
    }
});


resetButton.addEventListener("click", function() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.style.color = "black";
    p2Display.style.color = "black";
});

inputBox.addEventListener("change",function() {
    winningScore = Number(this.value);
    maxScore.textContent = winningScore;

});







































