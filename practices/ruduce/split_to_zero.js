'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [];
  var a = number * 10;
  interval *= 10;

  result.push(number);
  while (a > interval) {
    result.push((a - interval) / 10);
    a -= interval;
  }

  if (number % interval === 0) return result;

  result.push((a - interval) / 10);

  return result
}

module.exports = spilt_to_zero;
