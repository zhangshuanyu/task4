'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(result => collection_b.includes(result));
}

module.exports = choose_common_elements;
