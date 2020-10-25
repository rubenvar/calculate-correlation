const manageInput = require('../../lib/utils/manageInput');

describe('manageInput function', () => {
  it('returns the number arrays and a config object', () => {
    expect(
      manageInput([
        [2, 5],
        [4, 1],
      ])
    ).to.eql([
      [
        [2, 5],
        [4, 1],
      ],
      { returnDecimals: 9, returnString: false },
    ]);
    expect(manageInput([[4, 1], 'will fail other tests'])).to.eql([
      [[4, 1], 'will fail other tests'],
      { returnDecimals: 9, returnString: false },
    ]);
  });
});
