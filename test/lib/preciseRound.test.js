const preciseRound = require('../../lib/utils/preciseRound');

describe('preciseRound function', () => {
  it('returns a number rounded to n decimal positions', () => {
    expect(preciseRound(42, 5)).to.equal(42);
    expect(preciseRound(42.28834572, 5)).to.equal(42.28835);
    expect(preciseRound(-2.78676965723443567, 7)).to.equal(-2.7867697);
    expect(preciseRound(0.9999999999999998, 5)).to.equal(1);
    expect(preciseRound(5.0000000000000001, 3)).to.equal(5);
    expect(preciseRound(42)).to.be.NaN;
    expect(preciseRound(NaN)).to.be.NaN;
    expect(preciseRound(null)).to.be.NaN;
    expect(preciseRound('text')).to.be.NaN;
  });
});
