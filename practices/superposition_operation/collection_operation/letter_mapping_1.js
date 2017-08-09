'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var mapping =a();
  collection=collection.filter(element => element %2 === 0);
  return collection.map(element => element = mapping[element -1]);
};
function a() {
  var result = [];
  for (var i=97;i<97+26;++i){
    result.push(String.fromCharCode(i));
  }
  return result;
}

module.exports = even_to_letter;
