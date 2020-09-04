"use strict";

var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var i = 0;

while (i < ingredients.length) {
  console.log(ingredients[i]);
  i = i + 1;
}

for (var x = 0; x < ingredients.length; x++) {
  console.log(ingredients[x]);
}

for (var y = ingredients.length - 1; y >= 0; y = y - 1) {
  console.log(ingredients[y]);
}

console.log(ingredients[x]);