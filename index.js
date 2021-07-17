//  For dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var  randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png to dice6.png

var randomDiceSource = "images/" + randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src" , randomDiceSource);


// For dice 2 

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomDiceSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src" , randomDiceSource2);


// to check who wins the game
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "⛳Player 1 Wins";
    document.querySelector("h1").style.fontSize = "4em";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins⛳";
    document.querySelector("h1").style.fontSize = "4em";
} 
else {
    document.querySelector("h1").innerHTML = "OOPS Draw!";
    document.querySelector("h1").style.fontSize = "4em";
}