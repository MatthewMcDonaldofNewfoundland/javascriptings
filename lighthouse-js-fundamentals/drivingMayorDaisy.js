const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
];
const carPassing = function (cars, speed) {
  var y = speed;
  var x = Date.now();

  cars.push(  { time : x,speed : y });

  return (cars);
  
};

console.log(carPassing(cars, 38));