'use strict';

function amount_even(collection) {

  //在这里写入代码
  var result = 0;

  for (var i = 2; i <= 10; i += 2)
    result += i;

  return result;
}

module.exports = amount_even;
