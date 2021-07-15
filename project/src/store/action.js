const ActionType = {
  CHANGE_GENRE: 'changeGenre',
  GET_FILMS_BY_GENRE: 'filmsByGenre',
  LOAD_FILMS: 'loadFilms',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
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
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};

export {ActionType, ActionCreator};
