import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  FILMS_COUNT: 20,
  LIKE_THIS_FILMS_COUNT: 4,
  MY_LIST_FILMS_COUNT: 9,
};

const Film = {
  NAME: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: '2014',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmsCount={Settings.FILMS_COUNT}
      likeThisFilmsCount={Settings.LIKE_THIS_FILMS_COUNT}
      myListFilmsCount={Settings.MY_LIST_FILMS_COUNT}
      filmName={Film.NAME}
      filmGenre={Film.GENRE}
      filmYear={Film.YEAR}
    />
  </React.StrictMode>,

  document.getElementById('root'),
);
