let nameInput = document.getElementById("nameInput");
let imgInput = document.getElementById("imgInput");
let addBtn = document.getElementById("addBtn");
let cards = document.getElementById("cards");

addBtn.addEventListener("click", function () {
  let name = nameInput.value;
  let imgUrl = imgInput.value;

  if (name === "" || imgUrl === "") return;

  let card = document.createElement("div");
  card.className = "card";

  let img = document.createElement("img");
  img.src = imgUrl;

  let title = document.createElement("h3");
  title.innerText = name;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  delBtn.addEventListener("click", function () {
    card.remove();
  });

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(delBtn);

  cards.appendChild(card);

  nameInput.value = "";
  imgInput.value = "";
});