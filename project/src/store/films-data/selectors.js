import {NameSpace} from '../root-reducer';
import {getFilmsByGenre} from '../../utils';

const getGenre = (state) => state[NameSpace.FILMS_DATA].genre;
const getFilms = (state) => state[NameSpace.FILMS_DATA].films;
const getFilm = (state) => state[NameSpace.FILMS_DATA].film;
const getPromoFilm = (state) => state[NameSpace.FILMS_DATA].promoFilm;
const getSimilarFilms = (state) => state[NameSpace.FILMS_DATA].similarFilms;
const getFavoriteFilms = (state) => state[NameSpace.FILMS_DATA].favoriteFilms;
const getFilmsByGenres = (state) => getFilmsByGenre(state[NameSpace.FILMS_DATA].films, state[NameSpace.FILMS_DATA].genre);
const getLoadedDataStatus  = (state) => state[NameSpace.FILMS_DATA].isDataLoaded;

export {getGenre, getFilms, getFilm, getPromoFilm, getSimilarFilms, getFavoriteFilms, getFilmsByGenres, getLoadedDataStatus};
