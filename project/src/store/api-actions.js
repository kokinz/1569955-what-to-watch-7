import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const.js';
import {adaptFilmsToClient, adaptFilmToClient} from '../services/adapter.js';

const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(adaptFilmsToClient(data))))
);

const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadFilm(adaptFilmToClient(data))))
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
);

const fetchSimilarFilms = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}${APIRoute.SIMILAR}`)
    .then(({data}) => dispatch(ActionCreator.loadSimilarFilms(adaptFilmsToClient(data))))
);

const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);

const postReview = ({id, rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`${APIRoute.FILMS}/${id}`)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export {fetchFilmsList, fetchFilm, fetchSimilarFilms, fetchReviews, postReview, checkAuth, login, logout};
