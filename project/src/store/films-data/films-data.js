import {ActionType} from '../action.js';
import {ALL_GENRES} from '../../const.js';

const initialState = {
  genre: ALL_GENRES,
  films: [],
  film: {},
  promoFilm: {},
  similarFilms: [],
  favoriteFilms: [],
  isDataLoaded: false,
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_FILM:
      return {
        ...state,
        film: action.payload,
      };
    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload,
      };
    case ActionType.LOAD_SIMILAR_FILMS:
      return {
        ...state,
        similarFilms: action.payload,
      };
    case ActionType.LOAD_FAVORITE_FILMS:
      return {
        ...state,
        favoriteFilms: action.payload,
      };
    default:
      return state;
  }
};

export {filmsData};
