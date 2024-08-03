function fibs(num) {
  if (num <= 0) {
    return [];
  } else if (num === 1) {
    return [0];
  }

  let arr = [0, 1];

  for (let a = 2; a < num; a++) {
    arr.push(arr[a - 1] + arr[a - 2]);
  }

  return arr;
}

function fibsRec(num, arr = [0, 1]) {
  if (num <= 0) {
    return [];
  } else if (num === 1) {
    return [0];
  }

  if (num == arr.length) {
    return arr;
  } else {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibsRec(num, arr);
  }
}
