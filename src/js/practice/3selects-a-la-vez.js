import { movies } from "../data/movies";
import { categories } from "../data/movie-categories";

/**
 1º filtrar
 2º ordenar
 3º buscar
 
 */

// export const filterSortSearch = async () => {
//   let copiaMovies = [...movies];

//   const inputSelectCategory = document.querySelector("#filter-by-categories");

//   console.log(inputSelectCategory.value);
//   const filtrarCategorias = async (films) => {
//     let filtrado = films.filter(
//       (movie) => movie.category === inputSelectCategory.value
//     );
//     if (
//       inputSelectCategory != null &&
//       inputSelectCategory.value != "" &&
//       Object.values(categories).includes(value)
//     ) {
//       return filtrado;
//     } else {
//       return films;
//     }
//   };
//   // let f1 =
// };
