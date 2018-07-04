'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var hashMap = [];
  for(var i=0;i<collectionA.length;i++){
    var ch = collectionA[i][0];
    var num=1,flag=0;
    var k = collectionA[i].indexOf('-');
    console.log(k);
    if(k!=-1){
      var p =collectionA[i].substring(k+1,collectionA.length);
      num  = parseInt(p);
//        num=1;
    }
    for(var j=0;j<hashMap.length;j++){
      if(hashMap[j].key==ch){
      flag=1;
      hashMap[j].count = hashMap[j].count+num;
      }

    }
    if(flag==0){
      console.log(num);
      hashMap.push({key: ch,count: num})
    }
  }

    var arr = objectB.value;
    console.log(arr);
    for(var i=0;i<arr.length;i++){
      var f = arr[i];
      for(var j=0;j<hashMap.length;j++){
        if(hashMap[j].key==f){
         var o = parseInt(hashMap[j].count);
               hashMap[j].count = o-parseInt(o/3);
        }

      }

    }
  return hashMap;
}
