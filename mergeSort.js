function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    // split elements until length of arr is 1 then execute merge with result
    const half = Math.floor(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0, half));
    const rightHalf = mergeSort(arr.slice(half));
    return merge(leftHalf, rightHalf);
  }
}

function merge(leftHalf, rightHalf) {
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];

  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
    if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
      result.push(leftHalf[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightHalf[rightIndex]);
      rightIndex++;
    }
  }
  return result
    .concat(leftHalf.slice(leftIndex))
    .concat(rightHalf.slice(rightIndex));
}

/*
mergeSort([105, 79, 100, 110]);
    mergeSort([105, 79]);
    mergeSort([100, 110]);
        mergeSort([105]); // returns arr condition satisfied
        mergeSort([79]); // returns arr condition satisfied
merge([105], [79]);
    result = [79, 105]; // returned & input as leftHalf variable for final merge call
        mergeSort([100]); // returns arr condition satisfied
        mergeSort([110]); // returns arr condition satisfied
merge([100], [110])
    result = [100, 110]; // returned & input as rightHalf variable for final merge call
merge([79, 105,],[100, 110])
   return result = [79, 100, 105, 110]; 
*/
