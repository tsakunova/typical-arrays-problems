
exports.min = function min (array) {
  if ((!array || array && array.length === 0) ){
    return 0;
  }
  return array.reduce((a, b) => {return a < b ? a : b});
}

exports.max = function max (array) {
  if ((!array|| array && array.length === 0) ){
    return 0;
  }
  return array.reduce((a, b) => {return a > b ? a : b});
}

exports.avg = function avg (array) {
  if ((!array|| array && array.length === 0) ){
    return 0;
  }
  return array.reduce((a, b) => a + b) / array.length;
}
