const calculateCorrelation = require('../index');

describe('main calculateCorrelation function call', () => {
  it('returns a function', () => {
    expect(calculateCorrelation).to.be.an.instanceof(Function);
  });
  it('throws an error if the input is not valid', () => {
    expect(() => calculateCorrelation([1, 2, 3], 'some text')).to.throw();
    expect(() =>
      calculateCorrelation([1, 2, 3], [3, 2, 'some text'])
    ).to.throw();
    expect(() => calculateCorrelation([1, 2, 3], [3, 2])).to.throw();
  });
  it('calculates the correlation coefficient of two array of numbers', () => {
    expect(calculateCorrelation([1, 2, 1, 2], [1, 2, 1, 3])).to.equal(
      0.904534034
    );
  });
});
