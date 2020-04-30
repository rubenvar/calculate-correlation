const calculateAverage = require('../../lib/average');

describe('calculateAverage function', () => {
  it('returns the average of an array of numbers', () => {
    expect(calculateAverage([2])).to.equal(2);
    expect(calculateAverage([2, 3, 4])).to.equal(3);
  });
  it('returns NaN if input is not valid', () => {
    expect(calculateAverage(['word', 'number'])).to.be.NaN;
  });
});
