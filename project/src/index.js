import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import films from './mocks/films';
import {LIKE_THIS_FILMS_COUNT} from './const.js';

ReactDOM.render(
  <React.StrictMode>
    <App
      likeThisFilmsCount={LIKE_THIS_FILMS_COUNT}
      films={films}
    />
  </React.StrictMode>,

  document.getElementById('root'),
);
