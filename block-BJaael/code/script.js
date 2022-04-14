var box=document.querySelector(".container");
box.style.display = "flex";
box.style.flexWrap = "wrap";
box.style.width="90%";
box.style.margin="20px auto"

function clickChange(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

function randomNumber(max){
    var num = Math.floor(Math.random() * max);
    return num;
}

    for(let i=0;i<499;i++){
        let div= document.createElement("div");
        div.classList.add("box1")
        let h2=document.createElement("h2")
        h2.innerText = randomNumber(500);
        div.append(h2)
        box.append(div)   
    }
     let allBoxes=document.querySelectorAll(".box1")
     function disco(){
         allBoxes.forEach((ele)=>{
             ele.style.backgroundColor=clickChange()
             ele.innerText=randomNumber(500)
         })
     }

    box.addEventListener("mousemove",disco)
   