// idea from https://codepen.io/grok/pen/LvOQbW?editors=0010
module.exports = n =>
  typeof n === 'number' && n === Number(n) && Number.isFinite(n);
