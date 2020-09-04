"use strict";

var x = 0;
var y = 0;

function howManyHundreds(number) {
  y = number % 100;
  x = (number - y) / 100;
  return x;
}

console.log(howManyHundreds(50));