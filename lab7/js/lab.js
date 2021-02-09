//Cheston Chen & Brian Quintero
//Lab 7
//Functions
//2/3/2021

//Created function that pops up message and gets user input.
function userInput() {
  var userName = window.prompt("Please enter your name.");//The text that pops up.
  document.writeln("This is your name in alphabetical order: " + userName.split("").sort().join("").toLowerCase());
  //Prints the user's text in alphabetical order.
}
userInput();//Calling the function.
