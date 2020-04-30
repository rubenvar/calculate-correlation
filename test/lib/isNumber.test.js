const isNumber = require('../../lib/utils/isNumber');

describe('isNumber function', () => {
  it('returns false if argument is not a number', () => {
    expect(isNumber('text')).to.be.false;
    expect(isNumber('42')).to.be.false;
    expect(isNumber([42])).to.be.false;
    expect(isNumber(undefined)).to.be.false;
    expect(isNumber(NaN)).to.be.false;
    expect(isNumber(null)).to.be.false;
  });
  it('returns true only if argument is a number', () => {
    expect(isNumber(42)).to.be.true;
    expect(isNumber(37.1292)).to.be.true;
    expect(isNumber(-9)).to.be.true;
    expect(isNumber(Math.PI)).to.be.true;
  });
});
