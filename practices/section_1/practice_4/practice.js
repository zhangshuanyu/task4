function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var collectionSame=[];
  var k=0;
  for(var A in collection_a){
    for(var B in object_b.value){
      if(collection_a[A].key === object_b.value[B]){
        collectionSame[k++]=object_b.value[B];
      }
    }
  }
  return collectionSame;

}

module.exports = collect_same_elements;
