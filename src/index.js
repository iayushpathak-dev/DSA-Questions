import readline from "readline-sync";
import bubbleSort from "./algorithms/bubbleSort.js";
import MaximumNumberArray from "./problems/MaximumNumberArray.js";
import minimumNumberInAnArray from "./problems/minimumElementArray.js";
import reverseArray from "./problems/reverseArray.js";
import arrayIsSortedOrNot from "./problems/arrayIsSorted.js";
import FirstDuplicateElementInArray from "./problems/FirstDuplicateElementInArray.js";
import { QuickSort } from "./algorithms/quickSort.js";

const choice = readline.question("Enter your choice: ");

switch (choice) {
  case "bubbleSort":
    bubbleSort({});
    break;

  case "maximumElementArray":
    MaximumNumberArray();
    break;

  case "minimunElementArray":
    minimumNumberInAnArray();
    break;

  case "reverseArray":
    reverseArray({});
    break;

  case "arrayIsSorted":
    arrayIsSortedOrNot();
    break;

  case "firstDuplicate":
    FirstDuplicateElementInArray({});
    break;
  case "quickSort":
    QuickSort({});
    break;

  default:
    console.log("Invalid choice");
}
