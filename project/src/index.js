import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

import films from './mocks/films';
import {LIKE_THIS_FILMS_COUNT} from './const.js';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        likeThisFilmsCount={LIKE_THIS_FILMS_COUNT}
        films={films}
      />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root'),
);
