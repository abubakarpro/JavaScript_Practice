var r = new Rectangle(14, 13);
console.log("Width from object=" + r.width);
console.log("height from object=" + r.height);
console.log("Area is=" + r.getArea());
var obj = { width: 12, height: 23 };
console.log("JSON_Obj in string :" + getJSON(obj));

//Returns the rectagle object with width and height parameters and getArea() method

function Rectangle(width, height) {
  var obj = {
    width: width,
    height: height,
    getArea: function() {
      return this.width * this.height;
    }
  };
  return obj;
}

//Returns the JSON representation of specified object
function getJSON(obj) {
  return JSON.stringify(obj);
}
/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    var r = fromJSON(Rectangle.prototype, '{"width":10, "height":20}');
 *
 */
function fromJSON(proto, json) {
  throw new Error("Not implemented");
}
