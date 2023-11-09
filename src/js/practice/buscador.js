import { categories } from "../data/movie-categories";
import { movies } from "../data/movies";
export {buscador}



//  categorias = document.querySelector(categories);
//  titulo = movies.map((movie) => movie.title);
//  director = movies.map((movie) => movie.director);
//  actores = movies.map((movie) => movie.actors);
//  año = movies.map((movie) => movie.year);

const searchHeader = document.getElementById("search-header");
const inputSearch = searchHeader.querySelector("#barra-busqueda");
const searchSuggestions = document.querySelector(".search-suggestions");
const searchLink = document.querySelector("a");


function buscador(){
  inputSearch.addEventListener("keyup", () => {
    console.log("funciona");
  });
}

buscador();



// export {buscador}

/***********************Buscador*************************************/

// const searchButton = document.getElementById("search-header");
// searchButton.addEventListener("click", buscador());

// function buscador() {
//   const element = document.createElement("input");
//   element.type = "text";
//   element.placeholder = "Search: ";

//   const container = document.getElementById("search-header");
//   container.appendChild(element);
// }
