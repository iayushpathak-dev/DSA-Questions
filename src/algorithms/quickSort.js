import arrayIsSortedOrNot from "../problems/arrayIsSorted";

export function QuickSort({ arr = [4, 9, 3, 6, 2, 8] }) {
  let pivot = arr[0];
  let leftArray = [];
  let rightArray = [];

  //use cases

  //check array is empty
  if (arr.length === 0) {
    return [];
  }

  //check array have only one element
  if (arr.length === 1) {
    return arr;
  }

  // check array is sorted

  const check = arrayIsSortedOrNot(arr);
  if (check) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      leftArray.push(arr[i]);
    }

    if (pivot < arr[i]) {
      rightArray.push(arr[i]);
    }
  }

  const result = QuickSort({ arr: leftArray }).concat(
    pivot,
    QuickSort({ arr: rightArray })
  );

  console.log(result);
  return result;
}
