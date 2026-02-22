let originalDiv = document.getElementById("original");
let mappedDiv = document.getElementById("mapped");
let button = document.getElementById("runBtn");

let numbers = [1, 2, 3, 4, 5];

originalDiv.innerText = numbers.join(", ");

function customMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}

button.onclick = function () {
  let doubled = customMap(numbers, function (num) {
    return num * 2;
  });

  mappedDiv.innerText = doubled.join(", ");
};