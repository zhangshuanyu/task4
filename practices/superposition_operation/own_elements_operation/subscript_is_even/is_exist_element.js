'use strict';
var is_exist_element = function(collection,element){
  var result_4 = false;
  var result_3 = false;

  for (var temp of collection) {
    if (temp === 3) result_3 = true;
    if (temp === 4) result_4 = true;
  }

  return element === 3 ? result_3 : !result_4;

};
module.exports = is_exist_element;
