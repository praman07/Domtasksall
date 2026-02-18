let main = document.createElement("div");
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.alignItems = "center";
main.style.gap = "20px";
main.style.padding = "40px";

document.body.append(main);

let numbersContainer = document.createElement("div");
numbersContainer.style.display = "flex";
numbersContainer.style.gap = "20px";
main.append(numbersContainer);

let result = document.createElement("h2");
main.append(result);

let button = document.createElement("button");
button.innerText = "Play";
button.style.padding = "10px 20px";
button.style.cursor = "pointer";
main.append(button);

button.addEventListener("click", function(){

    numbersContainer.innerHTML = "";

    let n1 = Math.floor(Math.random() * 9) + 1;
    let n2 = Math.floor(Math.random() * 9) + 1;
    let n3 = Math.floor(Math.random() * 9) + 1;

    let nums = [n1, n2, n3];

    nums.forEach(function(num){
        let box = document.createElement("div");
        box.style.height = "80px";
        box.style.width = "80px";
        box.style.display = "flex";
        box.style.alignItems = "center";
        box.style.justifyContent = "center";
        box.style.border = "2px solid black";
        box.style.fontSize = "24px";
        box.innerText = num;
        numbersContainer.append(box);
    });

    if(n1 === n2 && n2 === n3){
        result.innerText = "Jackpot";
    } else {
        result.innerText = "Try Again";
    }

});
