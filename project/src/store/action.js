const ActionType = {
  CHANGE_GENRE: 'changeGenre',
  GET_FILMS_BY_GENRE: 'filmsByGenre',
  LOAD_FILMS: 'loadFilms',
  LOAD_FILM: 'loadFilm',
  LOAD_PROMO_FILM: 'loadPromoFilm',
  LOAD_SIMILAR_FILMS: 'loadSimilarFilms',
  LOAD_FAVORITE_FILMS: 'loadFavoriteFilms',
  LOAD_REVIEWS: 'loadReviews',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
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
