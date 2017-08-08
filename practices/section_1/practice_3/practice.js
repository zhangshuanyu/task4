function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var collectionSame=[];
  var k=0;
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<object_b.value.length;j++){
      if(collection_a[i] === object_b.value[j]){
        collectionSame[k++]=object_b.value[j];
      }
    }
  }
  return collectionSame;
  //return '实现练习要求，并改写该行代码。';

}

module.exports = collect_same_elements;
