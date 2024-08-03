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
