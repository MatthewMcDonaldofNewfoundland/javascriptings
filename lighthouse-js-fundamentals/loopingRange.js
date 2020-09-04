
function range(start, end, step) {
  let rangeset = [];
  if (start === undefined || end === undefined || step === undefined) {
    return rangeset;
  } else if (end < start || step < 0) {
    console.log("rangeset",rangeset);
    return rangeset;
  } else {
    let temp = start;

    for (var i = 0; temp <= (end); i = i + 1) {
      rangeset.push(temp);
      temp = temp + step;


    }
    return rangeset;
  }
}
console.log(range(-9, 2, 3));



