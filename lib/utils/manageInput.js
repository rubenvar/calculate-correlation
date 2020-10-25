const isObject = require('./isObject');

module.exports = input => {
  let arrays = input;
  let options = {};

  if (input.length > 2) {
    /* eslint-disable-next-line prefer-destructuring */
    if (isObject(input[2])) options = input[2];
    arrays = input.slice(0, 2);
  }

  const opts = {
    returnString: options.string || false,
    returnDecimals: options.decimals || 9,
  };

  return [arrays, opts];
};
