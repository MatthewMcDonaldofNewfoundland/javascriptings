const bins = { waste: 4, recycling: 2, compost: 5 };

const trash = "";
const smartGarbage = function(trash,bins){
  var x = trash;

  bins[x] = bins[x] + 1;
 

  return(bins);
};


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));







console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));



