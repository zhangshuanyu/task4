'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let arr = Array.prototype.concat.apply([],collection)
  return Array.from(new Set(arr))
}

module.exports = double_to_one;
