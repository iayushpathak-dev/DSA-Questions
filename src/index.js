import readline from "readline-sync";
import bubbleSort from "./algorithms/bubbleSort.js";

const choice = readline.question("Enter your choice: ");

switch (choice) {
  case "bubbleSort":
    bubbleSort();
    break;

  default:
    console.log("Invalid choice");
}
