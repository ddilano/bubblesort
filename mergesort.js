function split(wholeArray) {

  let length = wholeArray.length;

  let middleIndex = Math.round(length/2)

  let firstHalf = wholeArray.slice(0, middleIndex)
  let secondHalf = wholeArray.slice(middleIndex)

  return [firstHalf, secondHalf];
}
function merge(arr1, arr2){
  return arr1[0] < arr2[0] ? [arr1[0], arr2[0]] : [arr2[0], arr1[0]]
}

function mergeSort(array) {

  /* your code here */

}
