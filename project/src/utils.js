import {ALL_GENRES, AuthorizationStatus} from './const.js';

const getGenresList = (films) => {
  const  genreList = new Set();
  genreList.add(ALL_GENRES);
  films.forEach((film) => genreList.add(film.genre));
  return Array.from(genreList);
};

const getFilmsByGenre = (films, genre) => (genre === ALL_GENRES) ? films : films.slice().filter((film) => film.genre === genre);

const checkAuthorized = (status) => status === AuthorizationStatus.AUTH;

export {getGenresList, getFilmsByGenre, checkAuthorized};
