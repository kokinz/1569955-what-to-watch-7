const RATING_COUNT = 10;
const LIKE_THIS_FILMS_COUNT = 4;
const PREVIEW_VIDEO_DELAY = 1000;
const SHOW_MORE_FILMS_COUNT = 8;
const ALL_GENRES = 'All genres';
const COMMENT_MIN_LENGTH = 50;
const COMMENT_MAX_LENGTH = 400;
const SUBMIT_ERROR_DELAY = 4500;

const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id',
  ADD_REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
  NOT_FOUND: '/404',
};

const FilmTab = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

const APIRoute = {
  FILMS: '/films',
  LOGIN: '/login',
  LOGOUT: '/logout',
  SIMILAR: '/similar',
  FAVORITE: '/favorite',
  PROMO: '/promo',
  COMMENTS: '/comments',
};

export {
  AppRoute,
  FilmTab,
  AuthorizationStatus,
  APIRoute,
  ALL_GENRES,
  COMMENT_MAX_LENGTH,
  COMMENT_MIN_LENGTH,
  SUBMIT_ERROR_DELAY,
  RATING_COUNT,
  LIKE_THIS_FILMS_COUNT,
  SHOW_MORE_FILMS_COUNT,
  PREVIEW_VIDEO_DELAY
};
