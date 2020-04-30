const calculateAverage = require('./average');

// will only call it with a _safe_ array of values
module.exports = values => {
  const µ = calculateAverage(values);
  const addedSquareDiffs = values
    .map(val => val - µ)
    .map(diff => diff ** 2)
    .reduce((sum, v) => sum + v, 0);
  const variance = addedSquareDiffs / (values.length - 1);
  return Math.sqrt(variance);
};

// TODO maybe export fns to calculate variance and std deviation too from the package?
