"use strict";

var moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

function finalPosition(moves) {
  var position = [0, 0];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = moves[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var move = _step.value;

      if (move === "north") {
        position[1] = position[1] + 1;
      } else if (move === "south") {
        position[1] = position[1] - 1;
      } else if (move === "west") {
        position[0] = position[0] - 1;
      } else if (move === "east") {
        position[0] = position[0] + 1;
      } else {
        console.log("twiddle");
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return position;
}

console.log(finalPosition(moves));