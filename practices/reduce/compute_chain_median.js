'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let result = collection.split("->").sort((a, b) => a - b > 0 ? 1 : -1);

  if (result.length % 2 === 0)return (parseInt(result[result.length / 2 - 1]) + parseInt(result[result.length / 2])) / 2;
  return result[parseInt(result.length / 2)];
}

module.exports = compute_chain_median;
