var value1 = "Pakistan is my country.";
var value2 = "it is a famous country in the world.";

var firstName = "AbuBakar";
var lastName = "Munir";
var fullname = "Hello, Abubakar Munir";

var value = "\tHello, World!";

var str = "ABABAB";
var value = "BA";

var bracket = "<a>";

var strEmail =
  "angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com";

var stringcheck = null;

//console.log(isString(stringcheck));

//console.log(extractEmails(strEmail));

//console.log(convertToLowerCase(str));

//console.log(convertToUpperCase(str));

//console.log(unbracketTag(bracket));

//console.log(removeFirstOccurrences(str, value));

//console.log(value.indexOf("World"));

//console.log(repeatString(value, 3));

//console.log(removeLeadingAndTrailingWhitespaces(value));

//console.log(getFirstChar(value1));

//console.log(extractNameFromTemplate(fullname));

//console.log(getStringFromTemplate(firstName, lastName));

//const result = concatenateStrings(string1, string2);
//console.log(result);

//console.log(concatenateStrings(value1, value2));

//console.log(getStringLength(value1));

//*****************************Strings Function ********************************

//strings concatenate

function concatenateStrings(value1, value2) {
  const finalstring = value1.concat(value2);

  return finalstring;
}

//Given Length of string
function getStringLength(value) {
  return value.length;
}

//Returns the result of string template and given parameters firstName and lastName.

function getStringFromTemplate(firstName, lastName) {
  const result = "Hello, " + firstName + " " + lastName;
  return result;
}

//Extracts a name from template string 'Hello, First_Name Last_Name!'.

function extractNameFromTemplate(value) {
  const result = value.substring(7); //substring(staringindex , endingindex)
  return result;
}

//Returns a first char of the given string.

function getFirstChar(value) {
  const result = value.charAt(0);
  return result;
}

//Removes a leading and trailing whitespace characters from string.
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

//* Returns a string that repeated the specified number of times.
function repeatString(value, count) {
  return value.repeat(count);
}

//Remove the first occurrence of string inside another string.
function removeFirstOccurrences(str, value) {
  //value ka starting index a gya ...
  var index = str.indexOf(value);

  if (index === -1) {
    return str;
  }
  return str.slice(0, index) + str.slice(index + value.length);

  //var startingindex = str.indexOf(value);
  //var endingindex = value.length;
  //console.log(str.Remove(startingindex, endingindex));
}

//Remove the first and last angle brackets from tag string
function unbracketTag(str) {
  return str.substring(1, str.length - 1);
}

//Converts all characters of the specified string into the upper case
function convertToUpperCase(str) {
  return str.toUpperCase();
}

//Converts all characters of the specified string into the lower case
function convertToLowerCase(str) {
  return str.toLowerCase();
}

//Extracts e-mails from single string with e-mails list delimeted by semicolons
function extractEmails(str) {
  return str.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

//* Returns true if the value is string; otherwise false.

function isString(value) {
  if (typeof value === "string") {
    return true;
  } else {
    return false;
  }
}
