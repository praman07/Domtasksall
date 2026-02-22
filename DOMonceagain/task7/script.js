let textarea = document.getElementById("text");
let count = document.getElementById("count");
let warning = document.getElementById("warning");

textarea.addEventListener("input", function () {
  let length = textarea.value.length;
  count.innerText = length;

  if (length > 100) {
    warning.style.display = "block";
  } else {
    warning.style.display = "none";
  }
});