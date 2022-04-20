// let display=document.querySelector("h2");
// let button=document.querySelectorAll(".calc-btn")
// let button1=document.querySelectorAll(".calc-btn1")
// let button2=document.querySelectorAll(".calc-btn2")
// let intialValue=0;

// function work(event){
//     if(event.target.classList.contains("result")){
//         display.innerText=eval(display.innerText);
//         return display.innerText;
//     }else if(event.target.classList.contains("clear")){
//         display.innerText=intialValue;
//         return display.innerText;
//     }else if(display.innerText=intialValue){
//         display.innerHTML=event.target.innerText;
//         return display.innerHTML;
//     }else{
//         display.innerText += event.target.innerText
//     }
// }
// button.forEach((e)=>{
//     e.addEventListener("click", work)
// })

let button=document.querySelectorAll(".btn");
let display=document.querySelector("h2");
let equal=document.querySelector(".result")
let clear=document.querySelector(".clear")
button.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        display.innerText+=e.target.innerText;
    })
})
equal.addEventListener("click",(e)=>{
    display.innerText=eval(display.innerText);
})
clear.addEventListener("click",(e)=>{
    display.innerText="";
})
