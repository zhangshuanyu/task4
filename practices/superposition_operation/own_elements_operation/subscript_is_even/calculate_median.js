'use strict';
var calculate_median = function(collection){
  var aver = collection.filter(result => result % 2 === 0);

  if (aver.length % 2 === 0)
    return (aver[aver.length / 2 - 1] + aver[aver.length / 2]) / 2;

  return aver[parseInt(aver.length / 2)];

};
module.exports = calculate_median;
