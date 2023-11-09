import { movies } from "../data/movies";
import { getMoviePosterUrl } from "../utils/movie-utils";
export {createMovieGrid};
export {showGrid};


function createPosterGrid(path) {
  const moviePosterWidth = 400;
  const element = document.createElement("img");
  element.src = getMoviePosterUrl(path, moviePosterWidth);
  element.className = "grid-poster";
  return element;
}

function createTitleGrid(title) {
  const element = document.createElement("div");
  element.className = "grid-title";
  element.textContent = title;
  return element;
}

function createDataGrid(rating, year, category) {
  const element = document.createElement("div");
  element.className = "grid-data";
  element.textContent = `Rating: ${rating} | ${year} | ${category}`;
  return element;
}
function createDescriptionGrid(description) {
  const element = document.createElement("p");
  element.className = "description-grid";
  element.textContent = description;
  return element;
}
function estiloDirector() {
  element.className = "span";
}
function createDirectorGrid(director) {
  const element = document.createElement("p");
  element.className = "director-grid";
  element.textContent = `Director: ${director}`;
  return element;
}
function createActorsGrid(actors) {
  const element = document.createElement("p");
  element.className = "actors-grid";
  element.textContent = `Actors: ${actors}`;
  return element;
}

function createMovieGrid(movieObj) {
  const movieElement = document.createElement("div");
  movieElement.className = "grid-movie";
  movieElement.appendChild(createPosterGrid(movieObj.poster));
  movieElement.appendChild(createTitleGrid(movieObj.title));
  movieElement.appendChild(
    createDataGrid(movieObj.rating, movieObj.year, movieObj.category)
  );
  movieElement.appendChild(createDescriptionGrid(movieObj.description));
  movieElement.appendChild(createDirectorGrid(movieObj.director));
  movieElement.appendChild(createActorsGrid(movieObj.actors));

  return movieElement;
}

function sortMovies(movies) {
  return movies.sort((a, b) => a.title.localeCompare(b.title));
}

const movieContainer = document.createElement("div");
movieContainer.className = "movie-container-grid";
const sortedMovies = sortMovies(movies);

for (let i = 0; i < sortedMovies.length; i++) {
  const movie = sortedMovies[i];
  const movieElement = createMovieGrid(movie);
  movieContainer.appendChild(movieElement);
}


document.querySelector("#root").appendChild(movieContainer);


const buttonGrid = document.getElementById("#button-grid");



document.querySelector("#button-grid").addEventListener("click", () => {
  showGrid();
});

function showGrid() {
  document.querySelector(".movie-container-list").style.display = "none";
  document.querySelector(".movie-container-grid").style.display = "flex";
}