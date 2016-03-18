var expect = require('chai').expect;
var time = require('./../js/time.js').time

describe ("time", function() {
  it("will convert unix git time to a more readable format", function() {
    var unix_time = "2014-09-02T22:10:13Z";
    expect(time(unix_time)).to.equal("Tuesday, September 2nd 2014, 3:10 pm");
  })
})
