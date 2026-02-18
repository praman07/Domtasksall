
let main = document.createElement("main");
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.alignItems = "center";
main.style.gap = "40px";
main.style.padding = "5%";
document.body.append(main);

let players = document.createElement("div");
players.style.display = "flex";
players.style.gap = "80px";
main.append(players);

let div1 = document.createElement("div");
div1.style.textAlign = "center";

let img1 = document.createElement("img");
img1.style.height = "250px";
img1.style.width = "250px";
img1.style.objectFit = "cover";
img1.src = "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:best/streams/2013/August/130808/6C8558749-130808-walter-white-tease.jpg";

let score1 = document.createElement("h2");
score1.innerText = "Player 1";

div1.append(img1, score1);

let div2 = document.createElement("div");
div2.style.textAlign = "center";

let img2 = document.createElement("img");
img2.style.height = "250px";
img2.style.width = "250px";
img2.style.objectFit = "cover";
img2.src = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/10/14/14/hank.jpg?width=1200";

let score2 = document.createElement("h2");
score2.innerText = "Player 2";

div2.append(img2, score2);

players.append(div1, div2);

let result = document.createElement("h1");
result.innerText = "Click the button to roll dice ";
main.append(result);

let button = document.createElement("button");
button.innerText = "ROLL DICE";

button.style.padding = "15px 40px";
button.style.fontSize = "18px";
button.style.background = "black";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "40px";
button.style.cursor = "pointer";

main.append(button);


button.addEventListener("click", function () {

    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    score1.innerText = `Player 1 rolled: ${dice1}`;
    score2.innerText = `Player 2 rolled: ${dice2}`;

    if (dice1 > dice2) {
        result.innerText = " Player 1 Wins!";
    }
    else if (dice2 > dice1) {
        result.innerText = " Player 2 Wins!";
    }
    else {
        result.innerText = " It's a Draw!";
    }

});
