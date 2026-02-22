// function to return numbers greater than average
function greaterThanAverage(arr) {
  // calculate average
  let sum = arr.reduce((total, num) => total + num, 0);
  let average = sum / arr.length;

  // filter numbers greater than average
  let result = arr.filter(num => num > average);

  return result;
}

// DOM function
function handleClick() {
  let input = document.getElementById("numbersInput").value;

  // convert input string to number array
  let numbers = input.split(",").map(Number);

  let output = greaterThanAverage(numbers);

  document.getElementById("result").innerText =
    "Numbers greater than average: " + output.join(", ");
}