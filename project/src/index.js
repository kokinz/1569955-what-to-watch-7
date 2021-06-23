import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  FILMS_COUNT: 20,
};

const Film = {
  NAME: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: '2014',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmsCount={Settings.FILMS_COUNT} filmName={Film.NAME} filmGenre={Film.GENRE} filmYear={Film.YEAR}
    />
  </React.StrictMode>,

  document.getElementById('root'),
);
