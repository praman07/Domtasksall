let main = document.createElement("main");
main.style.minHeight = "100vh";
main.style.display = "flex";
main.style.flexWrap = "wrap";
main.style.gap = "20px";
main.style.padding = "40px";
document.body.append(main);
document.body.style.justifyContent = "center";
document.body.style.alignItems = "flex-start"; 
document.body.style.display = "flex"; 

let button = document.createElement("button");
button.innerText = "Create Card";
button.style.padding = "12px 25px";
button.style.cursor = "pointer";
button.style.position = "absolute"

document.body.prepend(button);
let id = 1;
button.addEventListener("click", function(){

    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let height = Math.floor(Math.random()*200)+100;
    let width = Math.floor(Math.random()*300)+150;
    let card = document.createElement("div");
    card.style.height = `${height}px`;
    card.style.width = `${width}px`;
    card.style.backgroundColor = `rgb(${r},${g},${b})`;
    card.style.borderRadius = "10px";
    card.setAttribute("data-id", id++);
    main.append(card);
});
