let main = document.createElement("div");
main.style.display = "flex";
main.style.gap = "20px";
main.style.padding = "40px";

document.body.append(main);

for(let i = 1; i <= 5; i++){

    let box = document.createElement("div");

    box.style.height = "120px";
    box.style.width = "120px";
    box.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    box.style.cursor = "pointer";

    box.setAttribute("data-id", `${i}`);

    box.addEventListener("click", function(){

        let id = box.getAttribute("data-id");
        document.querySelector(`[data-id="${id}"]`).remove();

    });

    main.append(box);
}
