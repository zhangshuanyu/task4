'use strict';

function compute_median(collection) {
  //在这里写入代码
  let arr = collection.sort((a, b) => a - b > 0 ? 1 : -1);

  if (arr.length % 2 !== 0)
    return arr[parseInt(arr.length / 2)];
  let result = (parseInt(arr[arr.length / 2 - 1]) + parseInt(arr[arr.length / 2])) / 2;

  return result;
}

module.exports = compute_median;


