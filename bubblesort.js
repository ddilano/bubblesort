let arr = [1,6,2,7,1241423];
let n = arr.length;

function swap(first, second) {
  let placeholder = arr[first];

  arr[first] = arr[second];
  arr[second] = placeholder;

}


// function bubbleSort(arr, n) {
//   if (n === 1) {
//     return arr;
//   }

//   for (let i = 0; i < n - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       swap(arr[i], arr[i + 1]);
//     }
//   }

//   bubbleSort(arr, n - 1);
// }
// bubbleSort(arr, n);


function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
      }
    }
  }
  return arr;
}
