const RATING_COUNT = 10;
const LIKE_THIS_FILMS_COUNT = 4;
const PREVIEW_VIDEO_DELAY = 1000;
const SHOW_MORE_FILMS_COUNT = 8;
const ALL_GENRES = 'All genres';

const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id',
  ADD_REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
};

const FilmTab = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

export {AppRoute, FilmTab, ALL_GENRES, RATING_COUNT, LIKE_THIS_FILMS_COUNT, SHOW_MORE_FILMS_COUNT, PREVIEW_VIDEO_DELAY};
