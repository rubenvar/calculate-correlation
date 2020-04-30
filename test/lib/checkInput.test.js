const checkInput = require('../../lib/utils/checkInput');

describe('checkInput function', () => {
  it('returns false if less than two args', () => {
    expect(checkInput('some text')).to.be.false;
    expect(checkInput([37])).to.be.false;
    expect(checkInput([[2, 4, 2]])).to.be.false;
  });
  // pass array of args because it receives the 'rest parameter' from main fn
  it('returns false if more than two args', () => {
    expect(
      checkInput([
        [3, 4, 6],
        [3, 4, 6],
        [3, 4, 6],
      ])
    ).to.be.false;
  });
  it('returns false if inputs are not arrays', () => {
    expect(checkInput(['some text', [1, 2, 3]])).to.be.false;
    expect(checkInput([[1, 2, 3], 234])).to.be.false;
    expect(checkInput([[1, 2, 3], { one: 1, two: 2, three: 3 }])).to.be.false;
  });
  it('returns false if arrays have no length', () => {
    expect(checkInput([[], []])).to.be.false;
    expect(checkInput([[], [1, 2, 3]])).to.be.false;
    expect(checkInput([[0], [0]])).to.be.true;
  });
  it('returns false if different length', () => {
    expect(checkInput([[6], [2, 4]])).to.be.false;
    expect(
      checkInput([
        [2, 4, 2, 4, 7, 2],
        [6, 2, 0],
      ])
    ).to.be.false;
  });
  it('returns false if values in arrays are not numbers', () => {
    expect(
      checkInput([
        [1, 2, 6],
        [3, 'one', 'two'],
      ])
    ).to.be.false;
    expect(
      checkInput([
        ['one', { number: 'seven' }, 'two'],
        [[1], 'dog', 2],
      ])
    ).to.be.false;
  });
  it('returns true if args are two arrays of numbers with same length', () => {
    expect(
      checkInput([
        [1, 2, 3],
        [2, 3, 4],
      ])
    ).to.be.true;
  });
});
