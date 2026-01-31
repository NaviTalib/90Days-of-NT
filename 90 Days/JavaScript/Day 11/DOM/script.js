let heading = document.querySelector("h1");

heading.style.color = "red";


let welcome = document.getElementsByClassName("b");
welcome[0].innerHTML = "HHHH";
welcome[0].style.color = "blue";

let third = document.getElementById("nice");

third.innerHTML = "visit again"

let btn = document.querySelector("button");
let input = document.querySelector("#name");
// btn.addEventListener("click",()=>{
//     // alert("button clicked");
//     console.log("clicked")
// })

btn.addEventListener("click",()=>{
    console.log(input.value);
});

// creating element

let div = document.createElement('div');

div.innerText = "New element";
document.body.appendChild(div);