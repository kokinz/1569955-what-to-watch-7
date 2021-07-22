import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {checkAuth, login, fetchFilmsList, fetchFilm} from './api-actions';
import {APIRoute, AuthorizationStatus} from '../const';
import {adaptFilmToClient} from '../services/adapter.js';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
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
    const filmsLoader = fetchFilm();
    const id = 1;

    apiMock
      .onGet(`${APIRoute.FILMS}/${id}`)
      .reply(200, {fake: true});

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/404',
        });
      });
  });

  it('should make a correct API call to GET /promo', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilm();

    apiMock
      .onGet(APIRoute.PROMO)
      .reply(200, {fake: true});

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: '/404',
        });
      });
  });

  it('should make a correct API call to GET /similar', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmsList();

    apiMock
      .onGet('/films/:3/similar')
      .reply(200, 'quoteDetailsData', [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [adaptFilmToClient({fake: true})],
        });
      });
  });
});

