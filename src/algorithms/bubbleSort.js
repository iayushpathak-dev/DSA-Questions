export default function bubbleSort({
  arr = [5, 4, 9, 3, 67, 1, 8],
  sortingType = "ascendingOrder",
  notShowingConsole = false,
}) {
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (
        sortingType === "ascendingOrder"
          ? arr[j] > arr[j + 1]
          : arr[j] < arr[j + 1]
      ) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  !notShowingConsole && console.log(arr);
  return arr;
}

// Note: Ascending Order smallest to largest , descending order largest to smallest
