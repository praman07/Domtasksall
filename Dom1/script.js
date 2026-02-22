// Task 1
let t1Text = document.getElementById("task1Text");
document.getElementById("task1Btn").onclick = function () {
  t1Text.innerText = t1Text.innerText === "Hello" ? "Welcome" : "Hello";
};

// Task 2
let colors = ["red", "green", "blue"];
let colorIndex = 0;
let box = document.getElementById("colorBox");

document.getElementById("colorBtn").onclick = function () {
  box.style.background = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
};

// Task 3
let hideBox = document.getElementById("hideBox");
document.getElementById("hideBtn").onclick = function () {
  hideBox.style.display =
    hideBox.style.display === "none" ? "block" : "none";
};

// Task 4
let angle = 0;
let rotateBox = document.getElementById("rotateBox");

document.getElementById("rightBtn").onclick = function () {
  angle += 45;
  rotateBox.style.transform = `rotate(${angle}deg)`;
};

document.getElementById("leftBtn").onclick = function () {
  angle -= 45;
  rotateBox.style.transform = `rotate(${angle}deg)`;
};

// Task 5
let count = 0;
let countEl = document.getElementById("count");

document.getElementById("plus").onclick = function () {
  count++;
  countEl.innerText = count;
};

document.getElementById("minus").onclick = function () {
  if (count > 0) {
    count--;
    countEl.innerText = count;
  }
};

// Task 6
document.getElementById("modeBtn").onclick = function () {
  document.body.classList.toggle("dark");
};

// Task 7
document.getElementById("textInput").oninput = function () {
  document.getElementById("outputText").innerText = this.value;
};

// Task 8
let hoverBox = document.getElementById("hoverBox");

hoverBox.onmouseenter = function () {
  hoverBox.style.background = "orange";
};

hoverBox.onmouseleave = function () {
  hoverBox.style.background = "lightgray";
};

// Task 9
let onceBtn = document.getElementById("onceBtn");

onceBtn.onclick = function () {
  document.getElementById("onceText").innerText = "Button Clicked";
  onceBtn.disabled = true;
};

// Task 10
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

function resetLights() {
  red.style.background = "gray";
  yellow.style.background = "gray";
  green.style.background = "gray";
}

document.getElementById("stop").onclick = function () {
  resetLights();
  red.style.background = "red";
};

document.getElementById("ready").onclick = function () {
  resetLights();
  yellow.style.background = "yellow";
};

document.getElementById("go").onclick = function () {
  resetLights();
  green.style.background = "green";
};