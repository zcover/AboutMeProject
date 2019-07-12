'use strict';
// Defines 'runpage' function, which will hold entire page js actions at this time
function runpage(){
  console.log('Function runpage() initiated');
  console.log('Function Changepage initiating');
  changepage();
  console.log('Function changepage completed');
  console.log('Function wrapUp initiating');
  wrapUp();
  console.log('Function wrapUp completed');
  console.log('Function Array1');
  Array1();
  console.log('Function Array1 completed');
  console.log('Function gathername Initiating');
  gathername();
  console.log('Function gathername completed');
  console.log('Runpage checklist 100% complete')
}
// runpage is the only active script on this page, relying on previous 3 functions to gather variables
runpage();
// Function 'gathername' defined and then verify expected response, will loop until provided
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

function wrapUp(){
    var noPrompt = prompt("Wowza! You're good at this! Figured out who I am yet?")
    if (noPrompt.toLowerCase() === 'no'){
        alert('Too bad!')
    }
}
// Function 'changepage' defined to change background color
function changepage(){
    var yourName = prompt('Winner, what is YOUR name?')
    var changeColor = prompt(yourName + ' Now has access to admin controls. Enter prefered text color.');

    //This line actively replaces h1 text to add reward system
    document.getElementById("h1edit").innerHTML = (yourName + ' successfully guessed my name!');

    //This line actively changes the css style to change most text color per user input
    document.body.style.color = (changeColor);
}

//EVERYTHING ABOVE THIS WORKS!!!
function Array1() {
var bugs = ['beetle', 'ant', 'fly', 'bubblebee', 'grasshopper', 'cricket'];
var pass = false;
var guessCounter = 0;

while(guessCounter < 6){
  var userGuess = prompt('What might be one of my favorite bugs?');
  console.log('Array1 User entered bug prompt');
  for(var i = 0; i < bugs.length; i++){
    if(userGuess === bugs[i]){
      alert('You got it! Yay, bugs!');
      console.log('Array1 correct answer stage');
      pass = true;
      guessCounter = 6;
      break;
    }
  }
  if (guessCounter !== 6){
    alert('Sorry, try again!');
    console.log('response fail, user entered ' + userGuess + 'to array 1');
  }
  guessCounter++;
  console.log('got to guess counter ++ line');

}
if(pass === false){
  alert('You got it wrong!');
  console.log('In second if statement line 84');
}
}
