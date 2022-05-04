var movieElem = document.querySelector('.movies');
var inputElem = document.querySelector('.add-input');
var formElem = document.querySelector('.form-elem');

var movies = ['Movie1', 'Movie2','Movie3', 'Movie4'];

function displayMovies(arr = []) {
    movieElem.innerHTML = '';
    arr.forEach((item, i) => {
        movieElem.innerHTML += `
            <div class="flex-box">
            <div>
              <input type="checkbox" >
              <span>${item}</span>
            </div>
              <button class="del-btn" id=${i}>X</button>
            </div>
        `
    })
} 

function addMovies(e) {
    e.preventDefault();
    var movie = inputElem.value;
    movies.push(movie);
    displayMovies(movies);
}

function deleteMovie(e) {
    if(e.target.className !== 'del-btn') return;
    var id = e.target.id;
    movies.splice(id, 1);
    displayMovies(movies);
}


formElem.addEventListener('submit', addMovies);
movieElem.addEventListener('click', deleteMovie);

displayMovies(movies);