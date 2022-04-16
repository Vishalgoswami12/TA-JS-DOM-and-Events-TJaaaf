var allBoxes = document.querySelectorAll('.box');
var boxes = document.querySelector('.boxes1');

allBoxes.forEach((item, i) => {
   item.addEventListener('click', () => {
        item.innerText = i + 1;
        setTimeout(() => {item.innerText = ''}, 5000)
   } )
});

boxes.addEventListener('click', (e) => {
    if(!e.target.classList.contains('box-del')) return;
    e.target.innerText = e.target.id;
    setTimeout(() => {e.target.innerText = ''}, 5000)
})