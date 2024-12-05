import bubbleSort from "../algorithms/bubbleSort.js";

export default function minimumNumberInAnArray() {
  const sortingArray = bubbleSort({
    arr: [23, 4, 1, 6, 3, 7, 9],
    sortingType: "ascendingOrder",
    notShowingConsole: true,
  });

  console.log(
    "minimum Element: ",
    sortingArray[0],
    ", sortedArray: ",
    sortingArray
  );
}
