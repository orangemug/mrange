var assert = require("assert");
var mrange = require("../");

var OUTSIDE_RANGE_STR =  "Value outside range";

describe("mrange", function() {
  it("forward range", function() {
    var out = mrange([20,40], [100,160], 30);
    assert.equal(out, 130);
  });

  it("forward range float", function() {
    var out = mrange([0,10], [100,200], 2.5);
    assert.equal(out, 125);
  });

  it("reverse range", function() {
    var out = mrange([10,0], [100,200], 2);
    assert.equal(out, 180);
  });

  it("reverse range float", function() {
    var out = mrange([1,0], [100,200], 0.5);
    assert.equal(out, 150);
  });

  it("throw error outside range upper", function() {
    var out = mrange([0,1], [100,200], 2);
    assert.equal(out, 200);
  });

  it("throw error outside range lower", function() {
    var out = mrange([0,1], [100,200], -1);
    assert.equal(out, 100);
  });

  it("throw error outside range upper reverse", function() {
    var out = mrange([1,0], [100,200], 2);
    assert.equal(out, 100);
  });

  it("throw error outside range lower reverse", function() {
    var out = mrange([1,0], [100,200], -1);
    assert.equal(out, 200);
  });
});

