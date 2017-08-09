'use strict';

function compute_average(collection) {
  //在这里写入代码
  var average = collection.reduce((average, value) => average + value);
  return average / collection.length;
}

module.exports = compute_average;

