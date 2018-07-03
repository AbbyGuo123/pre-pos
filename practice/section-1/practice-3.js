'use strict';

function collectSameElements(collectionA, objectB) {
   var c = new Array();
         var f = objectB.value;
         for(var i=0;i<collectionA.length;i++){
         if(f.indexOf(collectionA[i])!=-1){
            c.push(collectionA[i]);
         }
         }
      return c;
}
