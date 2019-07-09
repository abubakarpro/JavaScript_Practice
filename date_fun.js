const dateString = "December 17, 1995 03:24:00";

//console.log(currentDateMonthYear());
//console.log(getmonth("December 17, 1995 03:24:00"));
//console.log(parseDataFromRfc2822(dateString));
//console.log(getdate("December 17, 1995 03:24:00"));

// * Parses a rfc2822 string date representation into date value
//* For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14

function parseDataFromRfc2822(value) {
  return Date.parse(value);
}

//Current Date,Month,Year
function currentDateMonthYear() {
  var d = new Date();
  return d;
}

//Get DATe function
function getdate(date) {
  var d = new Date(date);
  return d.getDate();
}

//Get Month
function getmonth(date) {
  var d = new Date(date);
  return d.getMonth() + 1;
}
