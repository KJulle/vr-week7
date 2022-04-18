const container = document.querySelector('.container');

const movieTitle = document.querySelector('.userInputTitle');
const movieYear = document.querySelector('.userInputYear');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favouriteMovieYear');

let titleInStorage = localStorage.getItem('title');
let yearInStorage = localStorage.getItem('year')
let imageUrlInStorage = localStorage.getItem('imageUrl');

if (titleInStorage && imageUrlInStorage && yearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieYearToDisplay.textContent = yearInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(187, 125, 130, 0.747), rgba(92, 81, 81, 0.658)),
    url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let movieYearInput = movieYear.value;
    let posterUrlInput = moviePosterUrl.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('year', movieYearInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieYearToDisplay.textContent = movieYearInput;
    container.style.backgroundImage = `linear-gradient(rgba(187, 125, 130, 0.747), rgba(92, 81, 81, 0.658)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    movieYear.value = '';
    moviePosterUrl.value = '';
});