const RATING_COUNT = 10;
const LIKE_THIS_FILMS_COUNT = 4;
const PREVIEW_VIDEO_DELAY = 1000;

const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id',
  ADD_REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
};

const FilmTabs = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

export {AppRoute, FilmTabs, RATING_COUNT, LIKE_THIS_FILMS_COUNT, PREVIEW_VIDEO_DELAY};
