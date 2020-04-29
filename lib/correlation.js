const checkInput = require('./checks');
const calculateAverage = require('./average');
const calculateStandardDeviation = require('./stdDeviation');

module.exports = (...args) => {
  const isInputValid = checkInput(args);
  if (!isInputValid) throw new Error('Input not valid');

  const [x, y] = args;

  const avgX = calculateAverage(x);
  const avgY = calculateAverage(y);

  const stDevX = calculateStandardDeviation(x);
  const stDevY = calculateStandardDeviation(y);

  const addedMultipliedDifferences = x
    .map((val, i) => (val - avgX) * (y[i] - avgY))
    .reduce((sum, v) => sum + v, 0);

  const dividedByDevs = addedMultipliedDifferences / (stDevX * stDevY);

  const correlation = dividedByDevs / (x.length - 1);
  // console.log(correlation);
  return correlation;
};
