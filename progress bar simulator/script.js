let main = document.createElement("main");
main.style.height = "100vh";
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.justifyContent = "center";
main.style.alignItems = "center";
document.body.append(main);

let empty = document.createElement("div");
empty.style.height = "40px";
empty.style.width = "500px";
empty.style.border = "2px solid black";
empty.style.borderRadius = "10px";
empty.style.overflow = "hidden";

main.appendChild(empty);
let progress = document.createElement("div");
progress.style.height = "100%";
progress.style.width = "0%";
progress.style.background = "#04b11b";

empty.appendChild(progress);

let submit = document.createElement("button");
submit.style.height = "40px";
submit.style.width = "120px";
submit.style.borderRadius = "30px";
submit.style.backgroundColor = "#7cfcf1";
submit.style.color = "black";
submit.style.margin = "20px";
submit.innerText = "Go";

main.appendChild(submit);

let currentProgress = 0;

submit.addEventListener("click", function(){
    let increase = Math.floor(Math.random() * 21) + 10;
    currentProgress += increase;
    if(currentProgress > 100){
        currentProgress = 100;
    }

    progress.style.width = `${currentProgress}%`;

});
