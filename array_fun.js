const arr = ["34", "bakar", "55"];
const arr1 = [3, 4, 5, -3, -3, 45, 45, 9, 0];
const mixarr = ["bakar", 45, null, 456, "44"];
const value = "";
const data = [0, false, "cat", NaN, true, ""];
const data1 = ["bakar", "cat"];

console.log(getIntervalArray(0, 0));
//console.log(getFalsyValuesCount(["", false, true, false, 4]));
//console.log(findAllOccurences([1, 2, "3", "3", 3, 3, 3, 4], 3));
//console.log(toStringList(["sdf", "Ali", 4, 3]));
//console.log(getItemsSum([2, 4, 6]));

//console.log(get3TopItems([10, 10, 10, 10, 10]));
//console.log(propagateItemsByPositionIndex(["a"]));
//console.log(getSecondItems([1, 2, 3, 4, 5, 6, 7, 8]));
//console.log(getMovingSum([1, 1, 1, 1, 1, 1]));
//console.log(toArrayOfSquares([1, 2, 3]));

//console.log(getTail([1, 3, 4, 5], 1));

//console.log(getHead([1, 2, 3, 4, 5], 2));
//console.log(insertItem([1, "b", "c"], "x", 0));

//console.log(getStringsLength(arr));

//console.log(getUpperCaseStrings(data1));
//console.log(removeFalsyValues(data));

//console.log(getArrayOfStrings(mixarr));
//console.log(getArrayOfPositives(arr1));
//console.log(doubleArray(arr));
//console.log(findElement(arr, value));

//Returns an index of the specified element in array or -1 if element is not found
function findElement(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return i;
    }
  }
  return -1;
}

// Generates an array of odd numbers of the specified length

function generateOdds(len) {
  var arr = [];
  let j = 1;
  for (let i = 0; i < len; i++) {
    arr.push(j);
    j = j + 2;
  }
  return arr;
}

//Returns the doubled array - elements of the specified array are repeated twice using original order
function doubleArray(arr) {
  const doubleArray = arr.concat(arr);
  return doubleArray;
}

//Returns an array of positive numbers from the specified array in original order
function getArrayOfPositives(arr) {
  var positiveArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveArray.push(arr[i]);
    }
  }
  return positiveArray;
}

//Returns the array with strings only in the specified array (in original order)

function getArrayOfStrings(arr) {
  var stringArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      stringArray.push(arr[i]);
    }
  }
  return stringArray;
}

// * Removes falsy values from the specified array Falsy values: false, null, 0, "", undefined, and NaN.

function removeFalsyValues(arr) {
  return arr.filter(function(value) {
    return value;
  });
}

//Returns the array of useprcase strings from the specified array
function getUpperCaseStrings(arr) {
  var upperCaseString = [];
  upperCaseString = arr.map(function(value) {
    return value.toUpperCase();
  });
  return upperCaseString;
}

// Returns the array of string lengths from the specified string array.
function getStringsLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].length;
  }
  return arr;
}

//Inserts the item into specified array at specified index
function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

//Returns the n first items of the specified array
function getHead(arr, n) {
  const removed = arr.splice(0, n);
  return removed;
}

//Returns the n last items of the specified array
function getTail(arr, n) {
  // ["a", "b", "c", "d"], 3)
  arr.splice(0, arr.length - n);
  return arr;
}

// Returns CSV represebtation of two-dimentional numeric array.
function toCsvText(arr) {}

//Transforms the numeric array into the according array of squares:
function toArrayOfSquares(arr) {
  var saquareArray = [];
  saquareArray = arr.map(function(value) {
    return Math.pow(value, 2);
  });
  return saquareArray;
}

//Transforms the numeric array to the according moving sum array:
function getMovingSum(arr) {
  let j = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    arr[j] = arr[i] + arr[i + 1];
    j++;
  }
  return arr;
}

// Returns every second item from the specified array:
function getSecondItems(arr) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result.push(arr[i + 1]);
    }
  }
  return result;
}

// Propagates every item in sequence its position times
// Returns an array that consists of: one first item, two second items, tree third items etc.

function propagateItemsByPositionIndex(arr) {
  var result = []; //[a,b]
  result.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    for (let j = -1; j < i; j++) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Returns the 3 largest numbers from the specified array
function get3TopItems(arr) {
  result = [];
  arr1.sort(function(a, b) {
    return a - b;
  });
  result.push(arr[arr.length - 1]);
  result.push(arr[arr.length - 2]);
  result.push(arr[arr.length - 3]);
  return result;
}

//Returns the sum of all items in the specified array of numbers
function getItemsSum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

//Concatenates all elements from specified array into single string with ',' delimeter
function toStringList(arr) {
  return arr.join(",");
}

//Returns a number of all occurences of the specified item in an array
function findAllOccurences(arr, item) {
  var result = [];

  result = arr.filter(function(value) {
    return value === item;
  });
  return result.length;
}

//Returns the number of all falsy value in the specified array
function getFalsyValuesCount(arr) {
  var result = [];
  result = arr.filter(function(value) {
    return value;
  });
  return arr.length - result.length;
}

// Creates an array of integers from the specified start to end (inclusive)
function getIntervalArray(start, end) {
  var result = [];
  for (let i = start; i < end + 1; i++) {
    result.push(i);
  }
  return result;
}
