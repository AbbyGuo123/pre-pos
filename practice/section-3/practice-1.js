'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var arr = objectB.value;
  console.log(arr);
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<collectionA.length;j++){
      if(collectionA[j].key==arr[i]){
        console.log(collectionA[i].key +','+collectionA[i].count);
        collectionA[j].count = parseInt(collectionA[j].count)-1;
      }
    }
  }
  console.log(collectionA);
  return collectionA;
}
