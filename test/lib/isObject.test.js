const isObject = require('../../lib/utils/isObject');

describe('isObject function', () => {
  it('returns false if argument is not an object', () => {
    expect(isObject('text')).to.be.false;
    expect(isObject(42)).to.be.false;
    expect(isObject(['array'])).to.be.false;
    expect(isObject([{}, {}])).to.be.false;
    expect(isObject(NaN)).to.be.false;
    expect(isObject(null)).to.be.false;
  });
  it('returns true only if argument is an object', () => {
    expect(isObject({})).to.be.true;
    expect(isObject({ text: 'text', number: 42 })).to.be.true;
  });
});
