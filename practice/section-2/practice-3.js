'use strict';

// function countSameElements(collection) {
//   var f=0,flag=0,k;
//   var array = new Array();
//   var array2 = new Array();
//   var array3 = new Array();
//   var array4 = new Array();
//   array3 = collection[0].split(' ');
//   array.push(array3[0]);
//   for(var i=0;i<collection.length;i++){
//     if(collection[i].indexOf('[')!=-1){
//       array3 = collection[i].split('[');
//       collection[i] = array3[0]+'-'+array3[1].substring(0, array3.length - 1);
//       // collection[i]=collection[i].substring(0,collection[i].length-2);
//
//     }
//     else if(collection[i].indexOf(':')!=-1){
//       array3 = collection[i].split(':');
//       collection[i] = array3[0]+'-'+array3[1];
//     }
//     else if(collection[i].indexOf('-')!=-1){
//       array3 = collection[i].split('-');
//       collection[i] = array3[0]+'-'+array3[1];
//     }
//     array3 = collection[i].split('-');
//     for(var j=0;j<array.length;j++) {
//       if (array[j]==array3[0]) {
//         flag=1;
//       }
//     }
//     if(flag!=1){
//       array.push(array3[0]);
//     }
//     flag=0;
//   }
//   for(var i=0;i<array.length;i++) {
//     array4.push(0);
//   }
//   console.log('kkkk'+collection);
//   console.log("array" + ', ' + array);
//   console.log(4 + ", " + collection);
//
//   for (var i = 0; i < collection.length; i++) {
//     array3 = collection[i].split('-');
//     for(var j=0;j<array.length;j++) {
//       if (array[j] == array3[0] && array3.length==1){
//         array4[j]++;
//       }
//       else if(array[j] == array3[0]&& array3.length!=1){
//         var l = array3.substring(1,array3.length-1);
//         console.log("AAAA"+l);
//         f=parseInt(l);
//         array4[j]+=f;
//       }
//     }
//   }
//
//   for(var i=0;i<array.length;i++) {
//     var arr ={
//       "key" :array[i],
//       "count" :array4[i]
//     }
//     array2.push(arr);
//   }
//   return array2;
// }

function countSameElements(collection) {
  var resultMap = new Object();
  for(var i = 0; i < collection.length; i++){
    var ch = null, num = 1;
    var index = collection[i].indexOf('[');
    if(index != -1){
      ch = collection[i].substring(0, index);
      num = parseInt(collection[i].substring(index + 1, collection[i].length - 1));
    }else if((index = collection[i].indexOf('-')) != -1){
      ch = collection[i].substring(0, index);
      num = parseInt(collection[i].substring(index + 1, collection[i].length));
    }else if((index = collection[i].indexOf(':')) != -1){
      ch = collection[i].substring(0, index);
      num = parseInt(collection[i].substring(index + 1, collection[i].length));
    }else{
      ch = collection[i];
    }
    if(resultMap.hasOwnProperty(ch)){
      resultMap[ch] += num;
    }else{
      resultMap[ch] = num;
    }

  }

  for(var key in resultMap){
    console.log('key:' + key + ", value:" + resultMap[key]);
  }

  var results = [];
  for(var key in resultMap){
    results.push({name : key, summary : resultMap[key]});
  }
  return results;



}
