import { categories } from "../data/movie-categories";
import { movies } from "../data/movies";
export { addSort };
// export { sortByTitleAsc };
// export { sortByTitleDesc };

/**************************Sort by****************************************** */

let sort = document.querySelector(".sort-categories");
let select = document.createElement("select");
select.className = "sort-filter";
sort.appendChild(select);

const sortByButton = document.querySelector(".sort-filter");

function addSort() {
  const optionsData = [
    { text: "Sort by:", value: "sort-by" },
    {
      text: "Title alphabetically in ascending order.",
      value: "title-asc",
      class: "title-asc",
    },
    {
      text: "Title alphabetically in descending order.",
      value: "title-desc",
      class: "title-desc",
    },
    {
      text: "Director alphabetically in ascending order.",
      value: "director-asc",
      class: "director-asc",
    },
    {
      text: "Director alphabetically in descending order.",
      value: "director-desc",
      class: "director-desc",
    },
    { text: "Year in ascending order.", value: "year-asc", class: "year-asc" },
    {
      text: "Year in descending order.",
      value: "year-desc",
      class: "year-desc",
    },
  ];

  optionsData.forEach((data) => {
    const element = document.createElement("option");
    element.textContent = data.text;
    element.value = data.value;
    sortByButton.appendChild(element);
  });
}

addSort();

/***********/
let sortedMoviesList = document.querySelector(".movie-container-list");
let sortedMoviesGrid = document.querySelector(".movies-container-grid");
let titleAsc = document.querySelector(".title-asc");
let titleDesc = document.querySelector(".title-desc");

/*******Ordenar alfabeticamente asc****/

function sortByTitleAsc(movies) {
  return movies.sort((a, b) => a.title.localeCompare(b.title));
}

/*******Ordenar alfabeticamente desc****/

function sortByTitleDesc(movies) {
  return movies.sort((a, b) => b.title.localeCompare(a.title));
}

/********************************************/

// titleAsc.addEventListener("input", () => {
//   let sortedMovies = sortByTitleAsc(movies);
//   if (sortedMovies) {
//     if (sortedMoviesList.style.display === "flex") {
//       sortedMoviesGrid.innerHTML = "";
//     } else {
//       sortedMoviesList.style.display = "none";
//     }
//   }
// });

// /*******Ordenar alfabeticamente desc****/

// function sortByTitleDesc(movies) {
//   return movies.sort((a, b) => a.title.localeCompare(b.title));
// }

// titleDesc.addEventListener("input", () => {
//   let sortedMovies = sortByTitleDesc(movies);
//   if (sortedMovies) {
//     if (sortedMoviesList.style.display === "flex") {
//       sortedMoviesGrid.innerHTML = "";
//     } else {
//       sortedMoviesList.style.display = "none";
//     }
//   }
// });
