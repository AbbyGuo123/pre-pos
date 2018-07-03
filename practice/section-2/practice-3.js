'use strict';

function countSameElements(collection) {
  var f=0,flag=0,k;
  var array = new Array();
  var array2 = new Array();
  var array3 = new Array();
  var array4 = new Array();
  array3 = collection[0].split(' ');
  array.push(array3[0]);
  for(var i=0;i<collection.length;i++){
    array3 = collection[i].split(' ');
    for(var j=0;j<array.length;j++) {
      if (array[j]==array3[0]) {
        flag=1;
      }
    }
    if(flag!=1){
      array.push(array3[0]);
    }
    flag=0;
  }
  for(var i=0;i<array.length;i++) {
    array4.push(0);
  }

  console.log("array" + ', ' + array);
  console.log(4 + ", " + array4);

  for (var i = 0; i < collection.length; i++) {
    for(var j=0;j<array.length;j++) {
      console.log(array3.length)
      if (array[j] == array3[0] && array3.length==1){
        array4[j]++;
      }
      else if(array[j] == array3[0]&& array3.length!=1){
        f=parseInt(array3[2]);
        array4[j]+=f;
      }
    }
  }

  for(var i=0;i<array.length;i++) {
    var arr ={
      "key" :array[i],
      "count" :array4[i]
    }
    array2.push(arr);
  }
  return array2;
}
