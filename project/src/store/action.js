const ActionType = {
  CHANGE_GENRE: 'changeGenre',
  GET_FILMS_BY_GENRE: 'filmsByGenre',
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmsByGenre: () => ({
    type: ActionType.GET_FILMS_BY_GENRE,
  }),
};

export {ActionType, ActionCreator};
