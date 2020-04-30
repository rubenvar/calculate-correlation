// will only call it with a _safe_ array of values
module.exports = values =>
  values.reduce((sum, v) => sum + v, 0) / values.length;
