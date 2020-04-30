const checkInput = require('./utils/checkInput');
const calculateAverage = require('./average');
const calculateStdDev = require('./stdDeviation');
const preciseRound = require('./utils/preciseRound');

module.exports = (...args) => {
  const isInputValid = checkInput(args);
  if (!isInputValid) throw new Error('Input not valid');

  const [x, y] = args;

  const µ = { x: calculateAverage(x), y: calculateAverage(y) };
  const s = { x: calculateStdDev(x), y: calculateStdDev(y) };

  const addedMultipliedDifferences = x
    .map((val, i) => (val - µ.x) * (y[i] - µ.y))
    .reduce((sum, v) => sum + v, 0);

  const dividedByDevs = addedMultipliedDifferences / (s.x * s.y);

  const ρ = dividedByDevs / (x.length - 1);
  return preciseRound(ρ, 9);
};
