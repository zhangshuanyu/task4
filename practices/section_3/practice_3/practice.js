function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var c=[];
  var key_v="";
  var count_v=0;

  for(var i=0;i<collection_a.length;i++){
    if (collection_a[i] != -1){
      key_v = collection_a[i];
      var keyValue = list(collection_a,key_v,count_v);
      c.push(keyValue);
      count_v =0 ;
    }

  }
  for (var a in c){
    for (var b in object_b.value){
      if (c[a].key === object_b.value[b]){
        c[a].count-=Math.floor(c[a].count/3);
      }
    }
  }
  return c;
}
function list(collection_a,key_v,count_v) {
  for(var j=0;j<collection_a.length;j++){
    if (key_v === collection_a[j]){
      count_v++;
      collection_a[j] = -1;
    }
  }
  var sum = {key:key_v,count:count_v}
  return sum;
}


module.exports = create_updated_collection;
