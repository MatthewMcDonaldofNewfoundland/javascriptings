var area = 0;

function calculateRectangleArea(length,width){
  area = (length * width );
  if (area > 0) {
    return area;
  }
  else {
    return undefined;
  }

}
function calculateTriangleArea(base, height){
  area = (base * height / 2);
  if (area > 0) {
    return area;
  }
  else {
    return undefined;
  }
}
function calculateCircleArea(radius){
  area = Math.PI * (radius * radius);
  if (radius > 0) {
    return area;
  }
  else {
    return undefined;
  }
}

console.log(calculateCircleArea(-90));