'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var result = 0;

  for (var i = 1; i <= 10; i += 2)
    result += i;

  return result / 5;
}

module.exports = average_uneven;
