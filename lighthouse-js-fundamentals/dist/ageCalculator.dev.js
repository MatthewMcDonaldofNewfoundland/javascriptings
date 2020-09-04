"use strict";

var age = 0;

function ageCalculator(name, born, current) {
  age = current - born;
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Suzie", 1983, 2015));