const { expect } = require('chai');
const calculateCorrelation = require('../../lib/correlation');

describe('calculateCorrelation function args', () => {
  it('throws an error if only one arg ', () => {
    // wrap the call in another fn to let the assertion invoke the fn
    expect(() => calculateCorrelation([1, 2, 3])).to.throw();
  });
  it('throws an error if args not of correct type of form', () => {
    expect(() => calculateCorrelation([1, 2], [3])).to.throw();
    expect(() => calculateCorrelation(['one', 'three'], [1, 3])).to.throw();
  });
});

describe('calculateCorrelation function calcs', () => {
  it('calculates the correlation coefficient of two number arrays correctly', () => {
    expect(calculateCorrelation([1, 2], [1, 3])).to.equal(0.9999999999999998);
  });
});
