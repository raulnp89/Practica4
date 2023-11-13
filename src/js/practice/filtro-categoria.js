import { categories } from "../data/movie-categories";
import { movies } from "../data/movies";
import { createMovieGrid } from "./grid";
import { createMovieList } from "./lista";
export { addCategory };
import { filterSortSearch } from "./3selects-a-la-vez";

// /*******************************Boton*******************************************/

let filter = document.querySelector(".filter-categories");
let select = document.createElement("select");
select.addEventListener("input", filterCategory);
select.className = "filter-by-categories";
select.id = "filter-by-categories";

filter.appendChild(select);

const movieCategory = document.querySelector(".filter-by-categories");

function addCategory() {
  const options = [];

  for (const [key, value] of Object.entries(categories)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = value;
    options.push(option);
  }

  options.sort((a, b) => a.textContent.localeCompare(b.textContent));

  while (movieCategory.firstChild) {
    movieCategory.removeChild(movieCategory.firstChild);
  }

  options.forEach((option) => {
    movieCategory.appendChild(option);
  });
}

addCategory();

const defaultOption = document.createElement("option");
defaultOption.value = "filter-by";
defaultOption.textContent = "Filter by categories:";
defaultOption.selected = "true";
movieCategory.insertBefore(defaultOption, movieCategory.firstChild);

/***********************************************************************/

/******************Prueba multiples categorias************************************************/

let moviesLoad = structuredClone(movies);

function filterCategory(e) {
  let value = e.target.value.toLowerCase();
  let valueEsValido = Object.values(categories).find(
    (a) => a.toLowerCase() === value
  );

  if (valueEsValido !== undefined) {
    let peliculasFiltradas = moviesLoad.filter((film) =>
      film.category.toLowerCase().split(",").includes(value)
    );

    let loadedMovieList = document.querySelector(".movie-container-list");
    let loadedMovieGrid = document.querySelector(".movie-container-grid");

    if (loadedMovieGrid.style.display !== "none") {
      loadedMovieGrid.innerHTML = "";
      for (let i = 0; i < peliculasFiltradas.length; i++) {
        const movie = peliculasFiltradas[i];
        const movieElement = createMovieGrid(movie);
        loadedMovieGrid.appendChild(movieElement);
      }
    } else if (loadedMovieList.style.display !== "none") {
      loadedMovieList.innerHTML = "";

      for (let i = 0; i < peliculasFiltradas.length; i++) {
        const movie = peliculasFiltradas[i];
        const movieElement = createMovieList(movie);
        loadedMovieList.appendChild(movieElement);
      }
    }
  } else {
    let loadedMovieList = document.querySelector(".movie-container-list");
    let loadedMovieGrid = document.querySelector(".movie-container-grid");

    if (loadedMovieGrid.style.display !== "none") {
      loadedMovieGrid.innerHTML = "";
      for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        const movieElement = createMovieGrid(movie);
        loadedMovieGrid.appendChild(movieElement);
      }
    } else if (loadedMovieList.style.display !== "none") {
      loadedMovieList.innerHTML = "";

      for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        const movieElement = createMovieList(movie);
        loadedMovieList.appendChild(movieElement);
      }
    }
  }
}
filterCategory();
