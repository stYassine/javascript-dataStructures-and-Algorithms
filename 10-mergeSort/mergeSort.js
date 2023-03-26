const merge = require('./merge').merge;

function mergeSort(array){
   if(array.length === 1) return array;
   let mid = Math.floor(array.length / 2);
   let left = array.slice(0, mid);
   let right = array.slice(mid);
   return merge(mergeSort(left), mergeSort(right));
}

let unsorted = [3,1,4,2];
let mergeSorted = mergeSort(unsorted);

console.log(mergeSorted);