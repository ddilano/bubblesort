function split(wholeArray) {

  let len = wholeArray.length;

  let middleIndex = Math.round(len / 2);

  let firstHalf = wholeArray.slice(0, middleIndex)
  let secondHalf = wholeArray.slice(middleIndex)

  return [firstHalf, secondHalf];
}
function merge(arr1, arr2){
  return arr1[0] < arr2[0] ? [arr1[0], arr2[0]] : [arr2[0], arr1[0]];
}

function mergeSort(arr) {
  let temp = [arr];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 1){
      temp.push(arr[i]);
    }
    else {
      split(arr[i]);
    }
  }

  return temp;
}
