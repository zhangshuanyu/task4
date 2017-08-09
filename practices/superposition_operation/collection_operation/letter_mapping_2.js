'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var manpping = collection.reduce((sum,value) => sum + value);
  return a()[Math.floor(manpping/collection.length)];
}
function a() {
  var result = [];
  for( var i=97;i<97+26;++i){
    result.push(String.fromCharCode(i));
  }
  return result;
}

module.exports = average_to_letter;

