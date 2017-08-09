'use strict';

function find_first_even(collection) {
  //在这里写入代码
  for (let a of collection)
    if (a % 2 === 0)
      return a;

}

module.exports = find_first_even;

