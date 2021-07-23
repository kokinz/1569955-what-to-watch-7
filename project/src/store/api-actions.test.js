import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {checkAuth, login, fetchFilmsList, fetchFilm, fetchPromoFilm, fetchSimilarFilms, fetchFavoriteFilms, fetchReviews, postReview, postFavorite} from './api-actions';
import {APIRoute, AuthorizationStatus} from '../const';
import {adaptFilmToClient} from '../services/adapter.js';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /films', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmsList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [adaptFilmToClient({fake: true})],
        });
      });
  });

  it('should make a correct API call to GET /films/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const filmsLoader = fetchFilm(id);

    apiMock
      .onGet(`${APIRoute.FILMS}/${id}`)
      .reply(200, {fake: true});

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM,
          payload: adaptFilmToClient({fake: true}),
        });
      });
  });

  it('should make a correct API call to GET /promo', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchPromoFilm();

    apiMock
      .onGet(APIRoute.PROMO)
      .reply(200, {fake: true});

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: adaptFilmToClient({fake: true}),
        });
      });
  });

  it('should make a correct API call to GET /similar', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const filmsLoader = fetchSimilarFilms(id);

    apiMock
      .onGet(`${APIRoute.FILMS}/${id}${APIRoute.SIMILAR}`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_SIMILAR_FILMS,
          payload: [adaptFilmToClient({fake: true})],
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFavoriteFilms();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: [adaptFilmToClient({fake: true})],
        });
      });
  });

  it('should make a correct API call to GET /reviews', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const filmsLoader = fetchReviews(id);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${id}`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a correct API call to POST /reviews', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const fakeUser = {id, email: 'test@test.ru', password: '123456'};
    const reviewLoader = postReview(fakeUser);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${id}`)
      .reply(200, [{fake: true}]);

    return reviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `${APIRoute.FILMS}/${id}`,
        });
      });
  });

  it('should make a correct API call to POST /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const state = 1;
    const reviewLoader = postFavorite({id, state});

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${id}/${state}`)
      .reply(200, {fake: true});

    return reviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM,
          payload: adaptFilmToClient({fake: true}),
        });
      });
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });
});

