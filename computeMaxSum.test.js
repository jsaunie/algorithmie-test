import computeMaxSum from "./computeMaxSum";

jest.setTimeout(2000);

describe("computeMaxSum", () => {
  test("should exists", () => {
    expect(typeof computeMaxSum !== "undefined").toBe(true);
  });

  test("should compute the result for the 1st triangle (small)", (done) => {
    computeMaxSum(`${__dirname}/data/triangle_1.txt`, (err, result) => {
      expect(result).toBe(1074);
      done();
    });
  });

  test("should compute the result for the 2nd triangle (big)", (done) => {
    computeMaxSum(`${__dirname}/data/triangle_2.txt`, (err, result) => {
      expect(result).toBe(7273);
      done();
    });
  });
});
