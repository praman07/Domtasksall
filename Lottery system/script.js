
let main = document.createElement("main");
main.style.height = "100%";
main.style.position = "relative";
main.style.width = "100%";
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.justifyContent = "center"
main.style.alignItems = "center"
document.body.append(main);

let field = document.createElement("input")
field.setAttribute("type","number");
field.setAttribute("placeholder"," Enter Range 1-50 ");
field.style.height = "40px";
field.style.borderRadius = "10px";
field.style.backgroundColor = "black";
field.style.color = "white";
main.appendChild(field);
 
let rand = Math.ceil(Math.random()*50)+1;
let submit   = document.createElement("button");
submit.style.height = "40px";
submit.style.width = "120px";
submit.style.borderRadius = "30px";
submit.style.backgroundColor = "black";
submit.style.color = "white";
submit.style.margin = "20px";
submit.innerText = "Submit"
main.appendChild(submit);
let result = document.createElement("h1");
main.appendChild(result);
submit.addEventListener("click", function(){

    let userNumber = Number(field.value);

    if(userNumber === rand){
        result.innerText = "You Won ";
    }
    else{
        result.innerText = "Try Again ";
    }

});
