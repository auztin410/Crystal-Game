
var counter = 0;
var gameReady = true;
var randomNumber = 0;
var redRandom = 0;
var blueRandom = 0;
var yellowRandom = 0;
var purpleRandom = 0;

function createNumber() {
 randomNumber=[Math.floor(Math.random() * 200) +50];
 console.log("this is working!")
}

function redNumber() {
redRandom=[Math.floor(Math.random() * 10) +1];
}

function blueNumber() {
blueRandom=[Math.floor(Math.random() * 10) +1];
}

function yellowNumber() {
yellowRandom=[Math.floor(Math.random() * 10) +1];
}

function purpleNumber() {
purpleRandom=[Math.floor(Math.random() * 10) +1];
}

function startGame() {
gameReady=false;
createNumber();
redNumber();
blueNumber();
yellowNumber();
purpleNumber();
};

    

$("#startButton").on("click", function () {
    startGame();
    console.log("Your click worked!");
    console.log(gameReady);
    console.log(randomNumber);
    console.log(redRandom);
    console.log(blueRandom);
    console.log(yellowRandom);
    console.log(purpleRandom);
});