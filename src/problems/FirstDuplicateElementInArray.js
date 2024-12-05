export default function FirstDuplicateElementInArray({
  arr = [3, 4, 5, 6, 7, 5, 8, 9, 7, 4, 3],
}) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    if (i > 0 && arr[i] === arr[i - 1]) {
      console.log("first duplicate", arr[i]);
    }

    console.log("not founded");
  }
}
