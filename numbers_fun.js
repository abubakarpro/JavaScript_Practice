const moment = require("moment");

var value1 = 5;
var value2 = 10;

var num = 34536456;

var str = "100";

var str1 = 123;

console.log(toNumber("123", 0));

//console.log(isPrime(4));

//console.log(roundToPowerOfTen(2, 3));
//console.log(getParallelipidedDiagonal(1, 1, 1));

//console.log(parseNumberFromString(str));
//console.log(getLastDigit(num));
//getLinearEquationRoot(2, 3);

//console.log(getDistanceBetweenPoints(0, 0, 0, 1));
//console.log(getAverage(value1, value2));
//console.log(getRectangleArea(value1, value2));

//console.log(getCicleCircumference(value1));

// Returns an area of a rectangle given by width and heigth.
function getRectangleArea(width, height) {
  return width * height;
}

// * Returns a circumference of circle given by radius.

function getCicleCircumference(radius) {
  return 2 * 3.14 * radius;
}

//Returns an average of two given numbers.
function getAverage(value1, value2) {
  return (value1 + value2) / 2;
}

// Returns a distance beetween two points by cartesian coordinates.
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  //var num1 = Math.pow(x2 - x1, 2);
  //var num2 = Math.pow(y2 - y1, 2);
  //var result = Math.sqrt(num1 + num2);
  //return result;
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
function getLinearEquationRoot(a, b) {
  //var expr = new Expression("x");
  //expr = expr.subtract(a);
  //expr = expr.add("x");
  //var eq = "2x+3";
  //var x = eq.sloveFor("x");
  //var x = new Expression("x");
  //console.log("234");
}

//Returns a last digit of a integer number.
function getLastDigit(value) {
  const str = value.toString();
  const stringlastindex = str.charAt(str.length - 1);
  const lastDigit = parseInt(stringlastindex);
  return lastDigit;
}

//* Returns a number by given string representation.
function parseNumberFromString(value) {
  return parseInt(value);
}

//Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
function getParallelipidedDiagonal(a, b, c) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
}

//Returns the number rounded to specified power of 10.
function roundToPowerOfTen(num, pow) {
  return Math.pow(num, pow);
}

//Returns true is the number is prime; otherwise false.
function isPrime(n) {
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

//* Tries to convert value to number and returns it if conversion was successfull;
// otherwise returns default value passed as a second argument.

function toNumber(value, def) {
  if (parseInt(value)) {
    var intValue = parseInt(value);
    return intValue;
  }
  return def;
}
