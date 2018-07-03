'use strict';

function collectSameElements(collectionA, collectionB) {
  var c = new Array();
  var k=0;
  for(var i=0;i<collectionA.length;i++){
    if(collectionB.indexOf(collectionA[i])!=-1){
      c.push(collectionA[i]);
      k++;
    }
  }
  return c;
}
