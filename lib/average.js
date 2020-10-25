// will only call it with a _safe_ array of values, so no need to sanitize input here
module.exports = values =>
  values.reduce((sum, v) => sum + v, 0) / values.length;
