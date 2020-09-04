"use strict";

var moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']; ///finalPosition(moves);

function finalPosition(moves) {
  position = [x, y]; //var x = "";
  // var y = "";

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = moves[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var move = _step.value;
      var x = "";
      var y = ""; //  position = [x+y];

      if (move === "north") {
        x == x - 1;
      } else if (move === "south") {
        x = x - 1; //  return ;
      } else if (move === "west") {
        y = y - 1; //   position = [x,y]
      } else if (move === "east") {
        y = y + 1; //return(y);
      } else {//break;
        }

      return position; //return(y)
      // return positon;
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
}

console.log(finalPosition(moves));