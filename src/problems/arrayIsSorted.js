export default function arrayIsSortedOrNot({
  arr = [7, 3, 1, 5, 6, 78],
  sortingType = "ascendingOrder",
}) {
  let sorted = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      sortingType === "ascendingOrder"
        ? arr[0] < arr[i + 1]
        : arr[0] > arr[i + 1]
    ) {
      sorted++;
    }
  }

  if (sorted == arr.length - 1) {
    return console.log("Array is sorted");
  }

  console.log("Unsorted Array");
}
