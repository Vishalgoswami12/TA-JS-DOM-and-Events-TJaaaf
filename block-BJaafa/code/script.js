let data = [
    {
        country : "India",
        capital : "New Delhi"
    },
    {
       Country : "Japan",
        capital : "Tokyo"
    },
    {
        Country  : "Malaysia",
        capital : "kuala Lumpur"
    },
    {
        Country  : "Maldives",
        capital : "Male"
    },
    {
        Country  : "Myanmar",
        capital : "Nayapiydaw"
    },
    {
        Country  : "Nepal",
        capital : "Khatmandu"
    },
    {
        Country  : "New Zeland",
        capital : "wilington"
    },
    {
        Country  : "Oman",
        capital : "Muscot"
    },
    {
        Country : "Poland",
        capital : "Warsaw"
    },
    {
        Country  : "San Marino",
        capital : "San Marino"
    },
    {
        Country  : "Saudi Arabia",
        capital : "Riyadh"
    },
    {
        Country : "South Africa",
        capital : "Pretoria"
    },
    {
        Country  : "Turkey",
        capital : "Ankara"
    },
    {
        Country  : "Zembabwe",
        capital : "harare"
    },
    {
        Country : "Quator",
        capital : "Doha"
    },
    {
        Country  : "Peru",
        capital : "Lima"
    },
    {
        Country : "Russsia",
        capital : "Moscow"
    },
    {
        country : "Malawi",
        capital : "Lilongwe"
    },
    {
        Country  : "Mexico",
        capital : "Mexico City"
    },
    {
        Country  : "Nauru",
        capital : "Yaren"
    },
    {
        Country  : "Panama",
        capital : "Panama City"
    },
    {
        Country  : "Saint Lucia",
        capital : "Castries"
    },
    {
        Country : "Spain",
        capital : "Madrid"
    },
    {
        Country  : "Taiwan",
        capital : "Taipei"
    },
    {
        Country  : "Uganda",
        capital : "Kampala"
    },
    {
        Country  : "Ukraine",
        capital : "Keiv"
    },
    {
        Country  : "Yemen",
        capital : "Sana'a"
    },
    {
        Country  : "South Sudan",
        capital : "Juba"
    },

]


let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let button  = document.querySelector('button');

function generateRandomNumbers(num){
    return Math.floor(Math.random() * num);
}


function handleClick(){
    let randomIndex = generateRandomNumbers(data.length);
    let randomShortCut = data[randomIndex];
    h2.innerText = randomShortCut.Country;
    h3.innerText = randomShortCut.capital;
}

button.addEventListener('click', handleClick)
handleClick();
