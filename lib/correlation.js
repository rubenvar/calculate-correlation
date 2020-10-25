const calculateAverage = require('./average');
const calculateStdDev = require('./stdDeviation');
const checkInput = require('./utils/checkInput');
const preciseRound = require('./utils/preciseRound');
const manageInput = require('./utils/manageInput');

module.exports = (...args) => {
  const [arrays, options] = manageInput(args);

  const isInputValid = checkInput(arrays);
  if (!isInputValid) throw new Error('Input not valid');

  const [x, y] = arrays;

  const µ = { x: calculateAverage(x), y: calculateAverage(y) };
  const s = { x: calculateStdDev(x), y: calculateStdDev(y) };

  const addedMultipliedDifferences = x
    .map((val, i) => (val - µ.x) * (y[i] - µ.y))
    .reduce((sum, v) => sum + v, 0);

  const dividedByDevs = addedMultipliedDifferences / (s.x * s.y);

  const ρ = dividedByDevs / (x.length - 1);

  // return string?
  if (options.returnString === true) return ρ.toFixed(options.returnDecimals);
  // default return
  return preciseRound(ρ, options.returnDecimals);
};
