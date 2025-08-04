const API_KEY = 'd70f27ddc1dfedd0386128fcd0da874a';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const container = document.querySelector('.movies-container');

fetch(URL)
    .then(response => response.json())
    .then(data => {
        const movies = data.results;
        console.log(movies);
        displayMovies(movies);
    })

    .catch(error => {
        console.error('Error fetching data:', error);
    }
    );

function displayMovies(data) {
    data.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        const name = document.createElement('h2');
        const poster = document.createElement('img');
        name.textContent = movie.original_title;
        poster.setAttribute('src', `https://image.tmdb.org/t/p/w500/${movie.poster_path}`)
        movieElement.appendChild(name);
        movieElement.appendChild(poster);
        container.appendChild(movieElement);
    });
}

