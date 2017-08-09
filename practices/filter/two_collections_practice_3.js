'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(result => det(collection_b, result))
}
function det(collection, result) {
  return collection.some(a => result % a === 0);
}
module.exports = choose_divisible_integer;
