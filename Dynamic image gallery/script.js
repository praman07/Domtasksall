let arr =[
    "https://images.pexels.com/photos/35508921/pexels-photo-35508921.jpeg",
    "https://images.pexels.com/photos/19657160/pexels-photo-19657160.jpeg",
    "https://images.pexels.com/photos/35659910/pexels-photo-35659910.jpeg",
    "https://media.istockphoto.com/id/1160791767/photo/laughing-horse.jpg?s=612x612&w=0&k=20&c=_63iHrEConkZdSHORyIjOl7N4R4hxwKCZrwXmt8wptw=",
    "https://i.pinimg.com/736x/46/23/7c/46237ca7f6d91800b657412e1817a161.jpg",
]

let rand = Math.floor(Math.random()*arr.length);
let imgrand = arr[rand];

let main = document.createElement("main");
main.style.height = "100%";
main.style.width = "100%";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";
main.style.flexDirection="column"

document.body.append(main);

let img = document.createElement("img");
img.style.height = "500px";
img.style.borderRadius = "20px";
img.style.marginTop = "50px";
img.setAttribute("src",`${imgrand}`);
main.appendChild(img);


let uurl = document.createElement("h4");
uurl.innerHTML = `${imgrand}`;
main.appendChild(uurl);