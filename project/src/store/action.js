const ActionType = {
  CHANGE_GENRE: 'films/changeGenre',
  GET_FILMS_BY_GENRE: 'films/filmsByGenre',
  LOAD_FILMS: 'films/loadFilms',
  LOAD_FILM: 'films/loadFilm',
  LOAD_PROMO_FILM: 'films/loadPromoFilm',
  LOAD_SIMILAR_FILMS: 'films/loadSimilarFilms',
  LOAD_FAVORITE_FILMS: 'films/loadFavoriteFilms',
  LOAD_REVIEWS: 'reviews/loadReviews',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'common/redirectToRoute',
};

const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

const getFilmsByGenre = () => ({
  type: ActionType.GET_FILMS_BY_GENRE,
});

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

const loadFilm = (film) => ({
  type: ActionType.LOAD_FILM,
  payload: film,
});

const loadPromoFilm = (film) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: film,
});

const loadSimilarFilms = (films) => ({
  type: ActionType.LOAD_SIMILAR_FILMS,
  payload: films,
});

const loadFavoriteFilms = (films) => ({
  type: ActionType.LOAD_FAVORITE_FILMS,
  payload: films,
});

const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

const logout = () => ({
  type: ActionType.LOGOUT,
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export {ActionType, changeGenre, getFilmsByGenre, loadFilms, loadFilm, loadPromoFilm, loadSimilarFilms, loadFavoriteFilms, loadReviews, requireAuthorization, logout, redirectToRoute};
