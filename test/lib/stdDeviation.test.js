const calculateStandardDeviation = require('../../lib/stdDeviation');

describe('calculateStandardDeviation function', () => {
  it('returns the standard deviation of an array of numbers', () => {
    expect(calculateStandardDeviation([1, 4])).to.equal(2.1213203435596424);
    expect(calculateStandardDeviation([2, 3, 4])).to.equal(1);
    expect(calculateStandardDeviation([3.32, 9.060012, -5, 115])).to.equal(
      56.565270214034186
    );
  });
  it('returns NaN if input is not valid', () => {
    expect(calculateStandardDeviation([4])).to.be.NaN;
    expect(calculateStandardDeviation(['word', 'number'])).to.be.NaN;
  });
});
