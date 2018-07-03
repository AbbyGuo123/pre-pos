'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionA = countSameElements(collectionA);
  var arr = objectB.value;
  console.log(arr);
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<collectionA.length;j++){
      if(collectionA[j].key==arr[i]){
        console.log(collectionA[i].key +','+collectionA[i].count);
        var k = parseInt(collectionA[j].count);
        collectionA[j].count = k-parseInt(k/3);
      }
    }
  }
  console.log(collectionA);
  return collectionA;
}

function countSameElements(collection) {
  var f=0;
  var array = new Array();
  var array2 = new Array();

  for(var i=0;i<collection.length;i++){
    if(array.indexOf(collection[i])==-1){
      array.push(collection[i]);
    }
  }

  for(var i=0;i<array.length;i++) {
    f=0;
    for (var j = 0; j < collection.length; j++) {
      if (collection[j] == array[i])
        f++;


    }
    var arr ={
      "key" :array[i],
      "count" :f
    }
    array2.push(arr);
  }


  return array2;
}

