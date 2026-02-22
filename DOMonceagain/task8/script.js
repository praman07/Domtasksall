let products = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Grapes",
  "Pineapple",
  "Papaya"
];

let input = document.getElementById("search");
let list = document.getElementById("productList");

function renderItems(items) {
  list.innerHTML = "";

  items.forEach(function (item) {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

renderItems(products);

input.addEventListener("input", function () {
  let value = input.value.toLowerCase();

  let filtered = products.filter(function (product) {
    return product.toLowerCase().startsWith(value);
  });

  renderItems(filtered);
});