let box = document.getElementById("box");

let count = 0;
let rotation = 0;

box.ondblclick = function () {
  count++;
  rotation += 360;

  box.style.transform = `rotate(${rotation}deg)`;
  box.innerText = count;
};