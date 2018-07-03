'use strict';

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


  // var l =collection[0];
  // for(var i=0;i<collection.length;i++){
  //             l=collection[i];
  //            var k = collection.indexOf(collection[i]);
  //            if(k != -1 && collection[i]!='1'){
  //              collection[k] = '1';
  //              f++;
  //              k = collection.indexOf(l);
  //              if(k==-1){
  //                         var arr ={
  //                               "key" :collection[i],
  //                                "count" :k
  //                           }
  //                          array.push(arr);
  //                          f=0;
  //
  //
  //              }
  //            }
  //
  //        }



  return array2;
}
