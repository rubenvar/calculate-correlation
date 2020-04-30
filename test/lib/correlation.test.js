const calculateCorrelation = require('../../lib/correlation');

describe('calculateCorrelation function args', () => {
  it('throws an error if more or less than two args', () => {
    // wrap the call in another fn to let the assertion invoke the fn
    expect(() => calculateCorrelation([1, 2, 3])).to.throw();
    expect(() => calculateCorrelation([1, 2], [2, 1], [3, 2])).to.throw();
    expect(() => calculateCorrelation(1, 2, 2, 1, 3, 2)).to.throw();
  });
  it('throws an error if args not of correct type of form', () => {
    expect(() => calculateCorrelation([1, 2], [3])).to.throw();
    expect(() => calculateCorrelation(['one', 'three'], [1, 3])).to.throw();
  });
});

describe('calculateCorrelation function calcs', () => {
  it('calculates the correlation coefficient of two number arrays correctly', () => {
    expect(calculateCorrelation([1, 2, 2], [1, 2, 3])).to.equal(0.866025404);
    expect(calculateCorrelation([1, 2], [2, 1])).to.equal(-1);
  });
});
