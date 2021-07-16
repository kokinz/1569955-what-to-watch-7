import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';

import {createAPI} from './services/api';
import {reducer} from './store/reducer';
import {ActionCreator} from './store/action';
import {checkAuth, fetchFilmsList} from './store/api-actions';

import {LIKE_THIS_FILMS_COUNT, AuthorizationStatus} from './const.js';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(
    createAPI(
      () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
    ),
  )),
));

store.dispatch(checkAuth());
store.dispatch(fetchFilmsList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        likeThisFilmsCount={LIKE_THIS_FILMS_COUNT}
      />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root'),
);
