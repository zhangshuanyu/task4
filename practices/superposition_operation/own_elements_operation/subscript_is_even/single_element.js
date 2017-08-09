'use strict';
var single_element = function(collection){

  let result = [];
  let single = true;

  for (let out = 1; out < collection.length; out += 2) {
    for (let innerIndex = 1; innerIndex < collection.length; innerIndex += 2) {
      if (collection[out] === collection[innerIndex] && out !== innerIndex) {
        single = false;
      }
    }
    if (single) result.push(collection[out]);
    single = true;
  }

  return result;
};
module.exports = single_element;
