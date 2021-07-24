import {ActionType, changeGenre, getFilmsByGenre, loadFilms, loadFilm, loadPromoFilm, loadSimilarFilms, loadFavoriteFilms, loadReviews, requireAuthorization, logout, redirectToRoute} from './action.js';

describe('Actions', () => {
  it('action creator for change genre returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: 'Comedy',
    };

    expect(changeGenre('Comedy')).toEqual(expectedAction);
  });

  it('action creator for get films by genre returns correct action', () => {
    const expectedAction = {
      type: ActionType.GET_FILMS_BY_GENRE,
    };

    expect(getFilmsByGenre()).toEqual(expectedAction);
  });

  it('action creator for load films returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: ['film#1', 'film#2', 'film#3'],
    };

    expect(loadFilms(['film#1', 'film#2', 'film#3'])).toEqual(expectedAction);
  });

  it('action creator for load film returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_FILM,
      payload: {
        name: 'Matrix',
        duration: 134,
      },
    };

    expect(loadFilm({
      name: 'Matrix',
      duration: 134,
    })).toEqual(expectedAction);
  });

  it('action creator for load promo film returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: {
        name: 'Matrix',
        duration: 134,
      },
    };

    expect(loadPromoFilm({
      name: 'Matrix',
      duration: 134,
    })).toEqual(expectedAction);
  });

  it('action creator for load similar films returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_SIMILAR_FILMS,
      payload: ['film#1', 'film#2', 'film#3'],
    };

    expect(loadSimilarFilms(['film#1', 'film#2', 'film#3'])).toEqual(expectedAction);
  });

  it('action creator for load favorite films returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: ['film#1', 'film#2', 'film#3'],
    };

    expect(loadFavoriteFilms(['film#1', 'film#2', 'film#3'])).toEqual(expectedAction);
  });

  it('action creator for load reviews returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: ['review#1', 'review#2', 'review#3'],
    };

    expect(loadReviews(['review#1', 'review#2', 'review#3'])).toEqual(expectedAction);
  });

  it('action creator for require authorization returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'Authorized',
    };

    expect(requireAuthorization('Authorized')).toEqual(expectedAction);
  });

  it('action creator for logout returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('action creator for redirect to route returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: '/films',
    };

    expect(redirectToRoute('/films')).toEqual(expectedAction);
  });
});
