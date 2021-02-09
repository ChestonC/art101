//Cheston Chen & Brian Quintero
//Lab 8
//Anon Functions and Callbacks
//2/8/2021

function firstThing() {
  console.log("This first thing is running.");
}

function secondThing() {
  console.log("This second thing is running.");
}

function thirdThing() {
  console.log("This third thing is running.");
}

firstThing();
secondThing();
thirdThing();

var test2 = function (x, y, z) {return x, y, z};
test2 = firstThing(), secondThing(), thirdThing();
var test3 = function (x, y, z) {return x, y, z};
test3 = firstThing(), secondThing(), thirdThing();
setTimeout(function(){ test3; }, 3000);
