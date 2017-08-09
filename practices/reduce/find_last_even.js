'use strict';

function find_last_even(collection) {
  //在这里写入代码
  for (let a of collection.reverse())
    if (a % 2 === 0)
      return a;
}

module.exports = find_last_even;
