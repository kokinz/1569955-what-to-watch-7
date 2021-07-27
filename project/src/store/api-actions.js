import {loadFilms, redirectToRoute, loadFilm, loadPromoFilm, loadSimilarFilms, loadReviews, requireAuthorization, logout as closeSession, loadFavoriteFilms} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const.js';
import {adaptFilmsToClient, adaptFilmToClient} from '../services/adapter.js';

const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(adaptFilmsToClient(data))))
);

const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => dispatch(loadFilm(adaptFilmToClient(data))))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(loadPromoFilm(adaptFilmToClient(data))))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

const fetchSimilarFilms = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}${APIRoute.SIMILAR}`)
    .then(({data}) => dispatch(loadSimilarFilms(adaptFilmsToClient(data))))
);

const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavoriteFilms(adaptFilmsToClient(data))))
);

const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data)))
);

const postReview = ({id, rating, comment}, handleSubmitError) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => dispatch(loadReviews(data)))
    .then(() => dispatch(redirectToRoute(`${APIRoute.FILMS}/${id}`)))
    .catch(() => handleSubmitError())
);

const postFavorite = ({id, state}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${state}`)
    .then(({data}) => dispatch(loadFilm(adaptFilmToClient(data))))
    .catch(() => {})
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
);

export {fetchFilmsList, fetchFilm, fetchPromoFilm, fetchSimilarFilms, fetchFavoriteFilms, fetchReviews, postReview, postFavorite, checkAuth, login, logout};
