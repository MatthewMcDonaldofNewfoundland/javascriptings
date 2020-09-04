
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

///finalPosition(moves);

function finalPosition (moves){
   
position = [x,y];
  //var x = "";
   // var y = "";
  for ( const move of moves ) {
  var x = "";
  var y ="" ;
  //  position = [x+y];

    if (move === "north") { 
         x == (x - 1 )
       
    }
    else if (move === "south") { 
        x = (x - 1 );
      //  return ;
    }
  
    else if (move === "west") { 
      y =( y - 1);
   //   position = [x,y]
    }
    else if (move === "east") { 
      y =( y + 1);
    //return(y);
    }

    else { 
//break;
    }
   return (position);
 //return(y)
  
   // return positon;
}
}
console.log(finalPosition(moves) );