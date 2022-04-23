// let form=document.querySelector("form");
// let userInfo={};
// function handleSubmit(event){
//     event.preventDefault();
//     userInfo.text=form.element.text.value;
//     userInfo.email=form.element.email.value;
//     userInfo.gender=form.element.gender.value;
//     userInfo.color=form.element.color.value;
//     userInfo.rating=form.element.rating.value;
//     userInfo.drone=form.element.drone.checked;
//     userInfo.terms.form.element.terms.checked;
// }
// form.addEventListener("submit",handleSubmit)

// To take input from user from input event
 // target input and fire input event and store values in callback
// once we store all the input values, we need to submit by submit event
    // Now we have all the data in userInfo, 


let text= document.getElementById("name");
let email=document.getElementById("email")
let gender=document.getElementById("gender")
let color=document.getElementById("color")
let range=document.getElementById("range")
let friction=document.getElementById("fiction")
let nonFriction=document.getElementById("non-fiction")
let adventure=document.getElementById("adventure")
let terms=document.getElementById("terms")
let form=document.querySelector("form");
let button=document.querySelector(".btn")
let section=document.querySelector(".width")

let name1=document.querySelector("span")
let mail=document.querySelector(".email")
let type=document.querySelector(".love")
let colorChoice=document.querySelector(".col")
let rating=document.querySelector(".rate")
let bookGenric=document.querySelector(".book")
let agree=document.querySelector(".agree")
let userInfo={};

function textInput(event){ 
    userInfo.text=event.target.value;
}

function emailInput(event){
    userInfo.email=event.target.value;
}

function genderInput(event){
    userInfo.gender=event.target.value;
}

function colorInput(event){
    userInfo.color=event.target.value;
}

function rangeInput(event){
    userInfo.range=event.target.value;
}

function frictionInput(event){
    if(event.target.checked) {
        userInfo.generic=event.target.id;
    }
}

function nonFrictionInput(event){
    if(event.target.checked) {
        userInfo.generic=event.target.id;
    }
}

function adventureInput(event){
    if(event.target.checked) {
        userInfo.generic=event.target.id;
    }
}

function termsInput(event){
    if(event.target.checked)
    userInfo.term=event.event.target.id;
}

text.addEventListener('input', textInput);
email.addEventListener("input",emailInput)
gender.addEventListener("input",genderInput)
color.addEventListener("input",colorInput)
range.addEventListener("input",rangeInput)
friction.addEventListener("input",frictionInput)
nonFriction.addEventListener("input",nonFrictionInput)
adventure.addEventListener("input",adventureInput)
terms.addEventListener("input",termsInput)

function handleSubmit(event){
    event.preventDefault();
    section.style.display="block"
    name1.innerText+=userInfo.text;
    mail.innerText+=  userInfo.email;
    type.innerText+= userInfo.gender;
    colorChoice.innerText+=userInfo.color;
    rating.innerText+= userInfo.range;
    bookGenric.innerText+= userInfo.generic;
    agree.innerText="You Agree with terms and condition"
}

form.addEventListener("submit",handleSubmit)
button.addEventListener("click",()=>{
    section.style.display="none"
})