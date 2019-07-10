'use strict';
//Function 'gathername' defined and then verify expected response, will loop until provided
function gathername(){   
   var myName = prompt('What is my name?')
    myName = myName.toLowerCase()
//Below is the loop for correct answer
    if (myName.toLowerCase() === 'zerek'){
        alert('You are correct!');
    } else {
                alert('Noooope, try again!');
                gathername()
            }
}
//The below prompts are intended for filler questions, but at this moment, do not allow the rest of js to run
// prompt("Hello! Ready for a challenge?")
// prompt("Is it currently raining?")
// var noPrompt = prompt("Wowza! You're good at this! Figured out who I am yet?")
// if noPrompt === ('no'){
// alert('Too bad!')
// }
//Function 'changepage' defined to change background color
function changepage(){
    var yourName = prompt('Winner, what is YOUR name?')
    var changeColor = prompt(yourName + ' Now has access to admin controls. Enter prefered text color.');

    //This line actively replaces h1 text to add reward system
    document.getElementById("h1edit").innerHTML = (yourName + ' successfully guessed my name!');

    //This line actively changes the css style to change most text color per user input
    document.body.style.color = (changeColor);
}
//Defines 'runpage' function, which will hold entire page js actions at this time
function runpage(){
    gathername();
    changepage()
}
//runpage is the only active script on this page, relying on previous 3 functions to gather variables
runpage()