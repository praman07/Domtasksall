let box = document.getElementById("box");

let count = 0;
let angle = 0;

box.addEventListener("dblclick", function () {
  count++;
  angle += 360;

  box.style.transform = `rotate(${angle}deg)`;
  box.innerText = count;
});