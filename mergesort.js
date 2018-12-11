function split(wholeArray) {

  let len = wholeArray.length;

  let middleIndex = Math.round(len / 2);

  let firstHalf = wholeArray.slice(0, middleIndex)
  let secondHalf = wholeArray.slice(middleIndex)

  return [firstHalf, secondHalf];
}
function merge(left, right){
  let mergedArr = [];
  let leftIdx = 0;
  let rightIdx = 0;
  let leftVal;
  let rightVal;
  
  while (leftIdx < left.length || rightIdx < right.length)
    if ()
}

function mergeSort(arr) {
  let splitArr = split(arr);
  let leftArr = splitArr[0];
  let rightArr = splitArr[1];

  
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].length === 1){
  //     temp.push(arr[i]);
  //   }
  //   else {
  //     split(arr[i]);
  //   }
  // }

  return temp;
}

console.log(mergeSort([0, 3, 3002, 5]));
