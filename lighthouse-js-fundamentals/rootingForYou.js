const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 20,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];
function judgeVegetable(vegetables, metric){
  var best = 0; 
  for (var x = 0; x <= vegetables.length - 1; x = x + 1){
    if ((vegetables[best][metric] < vegetables[x][metric] )){
      best = x;
      console.log (best);
    }
    else if (x == vegetables.length){
      console.log(best + "we");
    }
    else {
      console.log("ok");
    }  
  }return ( vegetables[best].submitter) ;
}
console.log(judgeVegetable(vegetables,"redness"));