var btn = document.getElementById("btn");
var body = document.getElementById("body");
var carBox = document.getElementById("carBox");

var cars = [

{
name:"Ferrari 458 Italia",
personality:"You chase adrenaline and love attention.",
img:"https://cdn.prod.website-files.com/66da09ee919601fcdef82d9a/677c0acdc8b03e4b5f0ef729_672b41dfeaf34f072710a973_New_Ferrari_V12_ext_02_red_media.webp",
color:"#7a0000"
},

{
name:"Audi R8",
personality:"Sharp, intelligent, and effortlessly cool.",
img:"https://www.exoticcarhacks.com/wp-content/uploads/2024/02/3XlLSsAg.jpeg?dynamic_featured=1&size=full",
color:"#111111"
},

{
name:"Bugatti Chiron",
personality:"Built different. Made to dominate.",
img:"https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/0749/production/_88556810_04_chiron_molsheim_front_web.jpg",
color:"#020b8f"
},

{
name:"McLaren P1",
personality:"Futuristic mindset with elite taste.",
img:"https://robbreport.com/wp-content/uploads/2022/04/1-5.jpg?w=1000",
color:"#a63c06"
},

{
name:"WagonR",
personality:"Lol Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus dignissimos fuga officiis veritatis soluta neque fugit deleniti rerum aperiam excepturi aspernatur inventore atque facilis, quos labore sunt ex quam modi?",
img:"https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Maruti-Wagon-R-1999-2006/5080/1562654631549/front-left-side-47.jpg",
color:"#B6BD60"
}

];

btn.addEventListener("click", function(){

var randomIndex = Math.floor(Math.random()*cars.length);
var car = cars[randomIndex];

body.style.backgroundColor = car.color;

carBox.innerHTML =
"<div class='carInfo'>" +
"<h2>"+car.name+"</h2>" +
"<p>"+car.personality+"</p>" +
"</div>" +
"<div class='carImage'>" +
"<img src='"+car.img+"'>" +
"</div>";

});
