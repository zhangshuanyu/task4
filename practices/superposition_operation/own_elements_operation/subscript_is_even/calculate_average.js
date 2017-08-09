'use strict';
var calculate_average = function(collection){
  let aver = collection.filter(result => result % 2 === 0);

  return aver.reduce((sum, value) => sum + value) / aver.length;

};
module.exports = calculate_average;
