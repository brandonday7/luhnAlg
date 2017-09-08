//require the necessary pages
var assert = require("chai").assert;
var luhn = require("../lib/luhn");

//when testing...
//establish a proper credit card number
//call luhn(valid number (where number is a string)), and ensure it returns true
// true === true
describe("Luhn Algorithm", function() {
  it("Should return true for a valid credit card", function () {
    var creditCard = ("4520020023777833")
    result = luhn(creditCard);
    assert.isTrue(result);
  });

  //bad credit card number
  //call luhn, ensure it returns false
  // false === false
  it("Should return false for an invalid credit card", function () {
    var creditCard = ("4520020123777843")
    result = luhn(creditCard);
    assert.isFalse(result);
  });
});



