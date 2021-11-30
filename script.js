//select both dice
var roll = document.querySelectorAll(".dice img");
var heading = document.querySelector(".container h1");
// make random number generator 1-6
var random1 = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;

//moddify image attribute to insert image


roll[0].setAttribute("src", "images/dice" +random1 + ".png")

roll[1].setAttribute("src", "images/dice" +random2 + ".png")

if(random1>random2){
    heading.textContent = "Player 1 wins"
}else if(random2>random1){
    heading.textContent = "Player 2 wins"
}else{
    heading.textContent = "it's a draw"
}
