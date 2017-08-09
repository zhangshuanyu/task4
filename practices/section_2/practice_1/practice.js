function count_same_elements(collection) {
  //在这里写入代码
  //return '实现练习要求，并改写该行代码。';
  var key_value="";
  var result=[];
  var count_value=0;

  for(var i=0;i<collection.length;i++){
    if(collection[i]!=-1){
      key_value=collection[i];
      var result1=a(key_value,collection,count_value);
      result.push(result1);
      count_value=0;
    }
  }
  return result;
}
function a(key_value,collection,count_value){
  for(var j=0;j<collection.length;j++){
    if(key_value===collection[j]){
      count_value++;
      collection[j]=-1;
    }
  }
  var result2={key:key_value,count:count_value}
  return result2;
}


module.exports = count_same_elements;
