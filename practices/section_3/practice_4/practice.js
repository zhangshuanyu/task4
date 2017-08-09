function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collectionC = [];
  var count = 1;
  var n = 0;
  var a = collection_a.pop();

  for(var i = 0; i < collection_a.length; i++){
    if (collection_a[i] === collection_a[i + 1]){
      count++;
    }
    else{
      collectionC[n]= { key:collection_a[i],count: count};
      count = 1;
      n++;
    }
  }
  collectionC[n] = {
    key: a.split("-")[0],
    count: parseInt(a.split("-")[1])
  };

  for(var C in collectionC){
    for(var B in object_b.value){
      if(collectionC[C].key===object_b.value[B]){
        collectionC[C].count-=Math.floor((collectionC[C].count)/3);
      }
    }

  }
  return collectionC;

}

module.exports = create_updated_collection;
