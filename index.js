module.exports = function(from, to, v) {
  if(from[1] < from[0]) {
    v = Math.max(v, from[1]);
    v = Math.min(v, from[0]);
  } else {
    v = Math.max(v, from[0]);
    v = Math.min(v, from[1]);
  }

  var fromRange = from[1] - from[0];
  var toRange   = to[1]   - to[0];

  var percent = (100/fromRange) * (v-from[0]);
  return to[0]+((toRange/100)*percent);
};
