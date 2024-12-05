export default function reverseArray({
  arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
}) {
  let temp = [];
  for (let i = arr.length - 1; i != -1; i--) {
    temp.push(arr[i]);
  }
  console.log("reverse array :", temp);
  return temp;
}
