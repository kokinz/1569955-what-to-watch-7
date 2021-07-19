const ActionType = {
  CHANGE_GENRE: 'changeGenre',
  GET_FILMS_BY_GENRE: 'filmsByGenre',
  LOAD_FILMS: 'loadFilms',
  LOAD_FILM: 'loadFilm',
  LOAD_SIMILAR_FILMS: 'loadSimilarFilms',
  LOAD_REVIEWS: 'loadReviews',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmsByGenre: () => ({
    type: ActionType.GET_FILMS_BY_GENRE,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadFilm: (film) => ({
    type: ActionType.LOAD_FILM,
    payload: film,
  }),
  loadSimilarFilms: (films) => ({
    type: ActionType.LOAD_SIMILAR_FILMS,
    payload: films,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};

export {ActionType, ActionCreator};
