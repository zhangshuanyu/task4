'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  collection = collection.filter(element => element % 2 !== 0);

  return collection.reduce((result, value) => result + value * 3 + 5) + collection[0] * 3 + 4;
}

module.exports = hybrid_operation_to_uneven;

