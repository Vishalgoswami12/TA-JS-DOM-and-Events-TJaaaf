let change=document.querySelector(".first");
function clickChange(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    change.style.backgroundColor = bgColor;
}
change.addEventListener("click",clickChange)
let second=document.querySelector(".second")
function hoverChange(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    second.style.backgroundColor = bgColor;
}
second.addEventListener("mousemove",hoverChange)