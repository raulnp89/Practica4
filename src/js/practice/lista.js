import { movies } from "../data/movies";
import { getMoviePosterUrl } from "../utils/movie-utils";
export {createMovieList};
export {showList};


function createPosterList(path) {
  const moviePosterWidth = 400;
  const element = document.createElement("img");
  element.src = getMoviePosterUrl(path, moviePosterWidth);
  element.className = "list-poster";
  return element;
}

function createTitleList(title) {
  const element = document.createElement("div");
  element.className = "list-title";
  element.textContent = title;
  return element;
}

function createDataList(rating, year, category) {
  const element = document.createElement("div");
  element.className = "list-data";

  const starRating = createStarRating(rating, 10);
  element.appendChild(starRating);
  element.innerHTML += ` | ${year} | ${category}`;
  return element;

  element.textContent = `Rating: ${rating} | ${year} | ${category}`;
  return element;
}

function createStarRating(rating, maxRating) {
  const starRatingElement = document.createElement("div");
  starRatingElement.className = "star-rating";

  for (let i = 1; i <= maxRating; i++) {
    const star = document.createElement("span");
    if (i <= rating) {
      star.textContent = "★";
    } else {
      star.textContent = "☆";
    }
    starRatingElement.appendChild(star);
  }

  return starRatingElement;
}

function createDescriptionList(description) {
  const element = document.createElement("p");
  element.className = "description-list";
  element.textContent = description;
  return element;
}

function createDirectorList(director) {
  const element = document.createElement("p");
  element.className = "director-list";
  element.textContent = `Director: ${director}`;
  return element;
}

function createActorsList(actors) {
  const element = document.createElement("p");
  element.className = "actors-list";
  element.textContent = `Actors: ${actors}`;
  return element;
}

function createMovieList(movieObj) {
  const movieElement = document.createElement("div");
  movieElement.className = "list-movie";
  movieElement.appendChild(createPosterList(movieObj.poster));
  movieElement.appendChild(createTitleList(movieObj.title));
  movieElement.appendChild(
    createDataList(movieObj.rating, movieObj.year, movieObj.category)
  );
  movieElement.appendChild(createDescriptionList(movieObj.description));
  movieElement.appendChild(createDirectorList(movieObj.director));
  movieElement.appendChild(createActorsList(movieObj.actors));
  return movieElement;
}

function sortMovies(movies) {
  return movies.sort((a, b) => a.title.localeCompare(b.title));
}

const movieContainer = document.createElement("div");
movieContainer.className = "movie-container-list";
const sortedMovies = sortMovies(movies);

for (let i = 0; i < sortedMovies.length; i++) {
  const movie = sortedMovies[i];
  const movieElement = createMovieList(movie);
  movieContainer.appendChild(movieElement);
}

document.querySelector("#root").appendChild(movieContainer);


const buttonList = document.getElementById("#button-list");

document.querySelector("#button-list").addEventListener("click", () => {
  showList();
});
function showList() {
  document.querySelector(".movie-container-list").style.display = "flex";
  document.querySelector(".movie-container-grid").style.display = "none";
}