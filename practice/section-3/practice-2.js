'use strict';

function createUpdatedCollection(collectionA, objectB) {
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
