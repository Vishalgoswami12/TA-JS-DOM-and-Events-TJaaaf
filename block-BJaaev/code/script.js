var todoElem=document.querySelector(".todo");
var form= document.querySelector("form");
var input=document.querySelector(".input")
let button1=document.querySelector(".btn1")
let button2=document.querySelector(".btn2");
let button3=document.querySelector(".btn3")
let allButton=document.querySelector(".buttons")

var todos=[{title:"task1", isDone:true}];

//display todo function

function displayTodo(arr=[]){
    todoElem.innerHTML='';
    arr.forEach((item,i)=>{
    todoElem.innerHTML+=`
    <div>
    <input type="checkbox" class="checkbox-input" id=${i}>
    <span class=${item.isDone ? 'strike': ''}>${item.title}</span>
    <button class=del-btn id=${i}>x</button>
    </div>
    `
     })
}

/// add todo function

function addtodo(event){
    event.preventDefault();
    var todo=input.value;
   let obj={title:todo , isDone:false}
    todos.push(obj);
    input.value=""
    displayTodo(todos)
}


/// delete todo

function deleteTodo(event){
    if(event.target.className !=="del-btn") return;
    var id =event.target.id;
    todos.splice(id,1);
    displayTodo(todos)
}

//button result


function showResultAll(e){
    displayTodo(todos);
}

function showActive(e){
    var activeTodos = todos.filter(item => !item.isDone);
    displayTodo(activeTodos);
}

function showComplete(e){
    var completeTodos = todos.filter(item => item.isDone);
    displayTodo(completeTodos);
}

function handleCheckbox(e) {
    if(e.target.className !== "checkbox-input") return;
    var id = e.target.id;
    var target = todos[id];
    target.isDone = e.target.checked;
    todos = [...todos];
    displayTodo(todos)
}

displayTodo(todos);


form.addEventListener("submit",addtodo)
todoElem.addEventListener("click",deleteTodo)
button1.addEventListener("click",showResultAll)
button2.addEventListener("click",showActive);
button3.addEventListener("click",showComplete);
todoElem.addEventListener("click", handleCheckbox)