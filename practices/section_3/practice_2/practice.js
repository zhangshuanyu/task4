function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for(var A in collection_a){
    for(var B in object_b.value){
      if(collection_a[A].key===object_b.value[B]){
        collection_a[A].count -= Math.floor((collection_a[A].count)/3);


      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
