const isNumber = require('./isNumber');

module.exports = args => {
  // only two inputs exist
  if (args.length !== 2) return false;
  const [x, y] = args;
  // inputs are not falsy
  if (!x || !y) return false;
  // they are arrays
  if (!Array.isArray(x) || !Array.isArray(y)) return false;
  // length is not 0
  if (!x.length || !y.length) return false;
  // length is the same
  if (x.length !== y.length) return false;
  // all the elems in the arrays are numbers
  if (x.concat(y).find(el => !isNumber(el))) return false;
  // 👌 all good!
  return true;
};

// TODO maybe return some message about each problem, so it can be thrown in the Error
