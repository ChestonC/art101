//Cheston Cheston & Brian Quintero
//Lab 10
//JavaScipt Events and Forms
//2/15/2021

var outputEl = document.getElementById("output");
var userNameEl = document.getElementById("user-name");
var myButton = document.getElementById("my-button");

myButton.addEventListener("click", scrambleName);

function scrambleName(){
  var name = userNameEl.value;
  name = name.toLowerCase().split("").sort().join("");
  outputEl.innerText = name;
}
