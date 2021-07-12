import {ActionType} from './action.js';
import {getFilmsByGenre} from '../utils.js';
import {ALL_GENRES} from '../const.js';

import films from '../mocks/films.js';

const initialState = {
  genre: ALL_GENRES,
  films: films,
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
        films: getFilmsByGenre(films, state.genre),
      };
    default:
      return state;
  }
};

export {reducer};
