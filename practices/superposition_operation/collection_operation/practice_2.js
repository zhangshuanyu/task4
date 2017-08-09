'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  collection=collection.filter(element => element %2 !== 0);
  return collection.map(element => element =element*3+2);

}

module.exports = hybrid_operation_to_uneven;

