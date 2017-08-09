function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var count = 1;
  var n = 0;
  var a = collection.pop();

  for(var i = 0; i < collection.length; i++){
    if (collection[i] === collection[i + 1]){
      count++;
    }
    else{
      result[n]= { key:collection[i],count: count};
      count = 1;
      n++;
    }
  }

  result[n] = {
    key: a.split("-")[0],
    count: parseInt(a.split("-")[1])
  };

  return result;
}

module.exports = count_same_elements;
