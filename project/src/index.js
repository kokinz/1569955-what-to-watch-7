import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from './browser-history';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';

import {createAPI} from './services/api';
import rootReducer from './store/root-reducer';
import {requireAuthorization} from './store/action';
import {checkAuth, fetchFilmsList, fetchPromoFilm} from './store/api-actions';

import {AuthorizationStatus} from './const.js';
import {redirect} from './store/middlewares/redirect';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(
    createAPI(
      () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
    ),
  )),
  applyMiddleware(redirect),
));

store.dispatch(checkAuth());
store.dispatch(fetchFilmsList());
store.dispatch(fetchPromoFilm());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root'),
);
