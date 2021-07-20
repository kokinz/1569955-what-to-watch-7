import {combineReducers} from 'redux';
import {filmsData} from './films-data/films-data.js';
import {reviewsData} from './reviews-data/reviews-data.js';
import {userData} from './user-data/user-data.js';

const NameSpace = {
  FILMS_DATA: 'FILMS_DATA',
  REVIEWS_DATA: 'REVIEWS_DATA',
  USER_DATA: 'USER_DATA',
};

const combine = combineReducers({
  [NameSpace.FILMS_DATA]: filmsData,
  [NameSpace.REVIEWS_DATA]: reviewsData,
  [NameSpace.USER_DATA]: userData,
});

export {NameSpace, combine as default};
