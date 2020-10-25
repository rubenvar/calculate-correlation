// idea from https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript/8511350#8511350
module.exports = obj =>
  typeof obj === 'object' && obj !== null && !Array.isArray(obj);
