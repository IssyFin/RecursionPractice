function init() {
    let fibButton = document.getElementById("fibButton");
    let fibInput = document.getElementById("fibInput");
    let fibSolution = document.getElementById("fibSolution");
    fibButton.addEventListener("click", function () {
      fibSolution.textContent = fibsRec(fibInput.value);
      fibInput.value = "";
    });
  
    let mergeButton = document.getElementById("mergeButton");
    let mergeInput = document.getElementById("mergeInput");
    let mergeSolution = document.getElementById("mergeSolution");
    mergeButton.addEventListener("click", function () {
      let array = mergeInput.value.split(",");
      let sortedArray = mergeSort(array);
      mergeSolution.textContent = sortedArray;
      mergeInput.value = "";
    });
  }
  
  //Returns the first n terms of the Fibonacci sequence
  function fib(n) {
    let mySequence = [];
    let count = n;
    while (n !== 1) {
      if (mySequence.length <= 1) {
        mySequence.push(1);
      } else {
        newNumber =
          mySequence[mySequence.length - 1] + mySequence[mySequence.length - 2];
        mySequence.push(newNumber);
      }
      n--;
    }
    solution.textContent = `The first ${count} numbers of the Fibonacci sequence are ${mySequence}`;
  }
  
  //Returns the first n terms of the Fibonacci sequence but does so recursively
  function fibsRec(n) {
    if (n === 1) {
      return [1];
    } else if (n === 2) {
      return [1, 1];
    } else {
      let oldArray = fibsRec(n - 1);
      let newNumber =
        oldArray[oldArray.length - 1] + oldArray[oldArray.length - 2];
      return oldArray.concat([newNumber]);
    }
  }
  
  //Merge-sorts the provided array
  function mergeSort(inputArray) {
    //Base case 1: 0 or 1 element
    if (inputArray.length < 2) {
      return inputArray;
    }
    //Base case 2: 2 elements
    else if (inputArray.length === 2) {
      if (inputArray[0] < inputArray[1]) {
        return inputArray;
      } else {
        return [inputArray[1], inputArray[0]];
      }
    }
    //Remaining cases: split, then merge the 2
    else {
      let leftHalf = inputArray.slice(0, Math.ceil(inputArray.length / 2));
      let rightHalf = inputArray.slice(Math.ceil(inputArray.length / 2));
      let leftHalfSorted = mergeSort(leftHalf);
      let rightHalfSorted = mergeSort(rightHalf);
      let mergeSortArray = [];
      while (leftHalfSorted.length > 0 && rightHalfSorted.length > 0) {
        if (leftHalfSorted[0] < rightHalfSorted[0]) {
          mergeSortArray = mergeSortArray.concat(leftHalfSorted[0]);
          leftHalfSorted = leftHalfSorted.slice(1);
        } else {
          mergeSortArray = mergeSortArray.concat(rightHalfSorted[0]);
          rightHalfSorted = rightHalfSorted.slice(1);
        }
      }
      if (leftHalfSorted.length === 0) {
        mergeSortArray = mergeSortArray.concat(rightHalfSorted);
      } else {
        mergeSortArray = mergeSortArray.concat(leftHalfSorted);
      }
      return mergeSortArray;
    }
  }
  
  init();
  