'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let result = {};

  collection.map(element => {
    if (result[element] !== undefined)
      ++result[element];
    else
      result[element] = 1;
  });

  return result;
}

module.exports = grouping_count;
