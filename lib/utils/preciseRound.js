// idea from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-14.php
module.exports = (num, dec) =>
  Math.round(num * 10 ** dec + (num >= 0 ? 1 : -1) * 0.0001) / 10 ** dec;
