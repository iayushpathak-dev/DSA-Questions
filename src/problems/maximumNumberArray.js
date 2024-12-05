import bubbleSort from "../algorithms/bubbleSort.js";

export default function maximumNumberInAnArray(arr = [2, 1, 3, 6, 4, 8, 5]) {
  const sortingArray = bubbleSort({
    arr: [2, 1, 3, 6, 4, 8, 5],
    sortingType: "descendingOrder",
    notShowingConsole: true,
  });
  console.log(
    "Maximum Element in an Array: ",
    sortingArray[0],
    ", Items of an Array sorted form: ",
    sortingArray
  );
  return sortingArray[0];
}
