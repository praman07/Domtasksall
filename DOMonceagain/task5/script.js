let button = document.getElementById("playBtn");
let numberDiv = document.getElementById("number");
let resultText = document.getElementById("result");

button.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  numberDiv.innerText = randomNumber;

  if (randomNumber > 7) {
    resultText.innerText = "You Win!";
  } else {
    resultText.innerText = "Try Again!";
  }
});