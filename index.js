
var toString = Object.prototype.toString;

module.exports = function(object) {
  var type = typeof object;

  if (type === 'undefined') {
    return 'undefined';
  }

  if (Buffer.isBuffer(object))
    return 'buffer';

  if (type === 'object') {
    return toString.call(object).slice(8, -1).toLowerCase();
  }

  return type;
}

