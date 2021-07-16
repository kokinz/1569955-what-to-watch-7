import {ActionType} from './action.js';
import {getFilmsByGenre} from '../utils.js';
import {ALL_GENRES, AuthorizationStatus} from '../const.js';

const initialState = {
  genre: ALL_GENRES,
  films: [],
  film: {},
  similarFilms: [],
  reviews: [],
  filmsByGenre: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.GET_FILMS_BY_GENRE:
      return {
        ...state,
        filmsByGenre: getFilmsByGenre(state.films, state.genre),
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        filmsByGenre: getFilmsByGenre(action.payload, state.genre),
        isDataLoaded: true,
      };
    case ActionType.LOAD_FILM:
      return {
        ...state,
        film: action.payload,
      };
    case ActionType.LOAD_SIMILAR_FILMS:
      return {
        ...state,
        similarFilms: action.payload,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {reducer};
