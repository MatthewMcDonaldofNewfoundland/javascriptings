
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  


function finalPosition (moves){
  var position = [0,0];

  for ( const move of moves ) {

    if (move === "north") { 
      position [1] = (position[1]) + 1

    }
    else if (move === "south") { 
      position[1] = position[1] - 1

    }
  
    else if (move === "west") { 
      position[0] = position[0] - 1

    }
    else if (move === "east") { 
      position[0] = position[0] + 1

    }

    else { 
      console.log("twiddle")
    } 
      

  }
  return position;
}
console.log(finalPosition(moves) );
