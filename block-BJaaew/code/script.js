var container = document.querySelector('.container');
let allBtn=document.querySelectorAll(".btn");
let SearchBar = document.querySelector(".search");

function memberDescribe(arr = []){
    container.innerHTML = '';
        arr.forEach((item)=>{
            container.innerHTML +=`
            <div class="box1">
            <div class="inline">
                <img class="image" src= ${item.image} >
                <h3>${item.name}</h3>
                </div>
                <p>${item.description}</p>
                <div class=centre>
                <button class="btn"> Learn More</button>
                </div>
            </div>`
        })
}
var totalPeople = [];
for(var i = 0; i < got.houses.length; i++) {
    totalPeople = totalPeople.concat(got.houses[i].people);
}
memberDescribe(totalPeople);
// when click on button it should display all peole 
// when user type the name in search it should display that people in got

// Function for search input 
function searchQuery(e){
    var query = e.target.value;
    var filteredArr = totalPeople.filter(item => {
      return  item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })

   memberDescribe(filteredArr);
}

// Function to filter based on house name
allBtn.forEach(item => {
    item.addEventListener('click', (e) => {
        var filteredArr = got.houses.filter(house => house.name === item.innerText);
        memberDescribe(filteredArr[0].people);
    })
})


SearchBar.addEventListener("keyup",searchQuery)
