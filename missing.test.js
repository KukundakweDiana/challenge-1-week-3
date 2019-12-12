const missing = require("./missing");

describe("this test should check for missing numbers in an array sequence", () => {
  it("checks list", () => {
    var counting_numbers = [1, 2, 3, 5, 6, 8, 10];

    expect(missing(counting_numbers)).toEqual([4, 7, 9]);
  });
});
