var express = require("express");
var app = express();

const hostname = '127.0.0.1';
const port = 3000;

var alphabetValue = {
  'A' : 1,
  'B' : 2,
  'C' : 3,
  'D' : 4,
  'E' : 5,
  'F' : 6,
  'G' : 7,
  'H' : 8,
  'I' : 9,
  'J' : 10,
  'K' : 11,
  'L' : 12,
  'M' : 13,
  'N' : 14,
  'O' : 15,
  'P' : 16,
  'Q' : 17,
  'R' : 18,
  'S' : 19,
  'T' : 20,
  'U' : 21,
  'V' : 22,
  'W' : 23,
  'X' : 24,
  'Y' : 25,
  'Z' : 26
};

var stringToNum = (_str) => {
  var returnVal = 0;
  var splitArr = _str.split('').reverse();

  splitArr.map( (i,index) => {
    returnVal += (alphabetValue[i])*(Math.pow(26,index));
  });

  return returnVal;
}

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
 res.json(stringToNum(req.query.input));
});
