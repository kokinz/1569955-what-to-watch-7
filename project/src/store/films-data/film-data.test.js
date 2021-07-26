import {filmsData} from './films-data';
import {ActionType} from '../action';

describe('Reducer: filmsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmsData(undefined, {}))
      .toEqual({
        genre: 'All genres',
        films: [],
        film: {},
        promoFilm: {},
        similarFilms: [],
        favoriteFilms: [],
        isDataLoaded: false,
      });
  });

  it('should change genre by a given value', () => {
    const state = {
      genre: 'All genres',
    };

    const action = {
      type: ActionType.CHANGE_GENRE,
      payload: 'Comedy',
    };

    expect(filmsData(state, action))
      .toEqual({
        genre: 'Comedy',
      });
  });

  it('should update films by load films', () => {
    const state = {
      films: [],
    };

    const action = {
      type: ActionType.LOAD_FILMS,
      payload: ['film#1', 'film#2', 'film#3'],
    };

    expect(filmsData(state, action))
      .toEqual({
        films: ['film#1', 'film#2', 'film#3'],
      });
  });

  it('should update film by load film', () => {
    const state = {
      film: {},
    };

    const action = {
      type: ActionType.LOAD_FILM,
      payload: {
        id: 5,
        title: 'Matrix',
      },
    };

    expect(filmsData(state, action))
      .toEqual({
        film: {
          id: 5,
          title: 'Matrix',
        },
      });
  });

  it('should update promo film by load promo film', () => {
    const state = {
      promoFilm: {},
      isDataLoaded: false,
    };

    const action = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: {
        id: 5,
        title: 'Matrix',
      },
    };

    expect(filmsData(state, action))
      .toEqual({
        promoFilm: {
          id: 5,
          title: 'Matrix',
        },
        isDataLoaded: true,
      });
  });

  it('should update favorite films by load favorite films', () => {
    const state = {
      favoriteFilms: [],
    };

    const action = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: ['film#1', 'film#2', 'film#3'],
    };

    expect(filmsData(state, action))
      .toEqual({
        favoriteFilms: ['film#1', 'film#2', 'film#3'],
      });
  });

  it('should update similar films by load similar films', () => {
    const state = {
      similarFilms: [],
    };

    const action = {
      type: ActionType.LOAD_SIMILAR_FILMS,
      payload: ['film#1', 'film#2', 'film#3'],
    };

    expect(filmsData(state, action))
      .toEqual({
        similarFilms: ['film#1', 'film#2', 'film#3'],
      });
  });
});
