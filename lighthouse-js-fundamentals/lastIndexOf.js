

function lastIndexOf(array,number) {
  var x = (array.length - 1);
   
  for ( x; x >= -2; x = x - 1){   
     
    if (x <= -1){
      x = -1;
      return (x);
    }
    else if (array === undefined || number === undefined){
      x = -1
      return(x);
    } 
    else if (array[x] === number){
      return(x);    
    }
   
  }
}
console.log(lastIndexOf([],3 ));



