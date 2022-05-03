let form=document.querySelector("form");
let userNameError="";
let userName=document.querySelector(".user")
let name1=document.querySelector(".name")
let email=document.querySelector(".email")
let number=document.querySelector(".num")
let password=document.querySelector(".pass");
let password1=document.querySelector(".pass1")


function handleSubmit(event){
    event.preventDefault();
    if(userName.value.length < 4){
        userNameError="Username can't be less than 4 character"
        userName.nextElementSibling.innerText=userNameError;
    } else if(!isNaN(name1.value)) {
        userNameError="You can't use in this feild"
        name1.nextElementSibling.innerText=userNameError;
    }else if(!email.value.includes("@")){
        userNameError="Not a valid email"
        email.nextElementSibling.innerText=userNameError;
    }else if(email.value.length<6){
        userNameError="Email length should be 6"
        email.nextElementSibling.innerText=userNameError;
    }
    else if(isNaN(number.value)){
        userNameError="Phone number can be a number"
        number.nextElementSibling.innerText=userNameError;
    }else if(number.value.length<7){
        userNameError="Phone number must be 7 length"
        number.nextElementSibling.innerText=userNameError; 
    }else if(password.value !== password1.value){
    userNameError="Enter a valid password";
    password1.nextElementSibling.innerText=userNameError;
    }else{
        alert("User added sucessfully")
    }
}

form.addEventListener("submit",handleSubmit)