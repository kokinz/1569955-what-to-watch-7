import React from 'react';
import PropTypes from 'prop-types';
import filmProp from '../film-page/film.prop';

import {getGenresList} from '../../utils.js';

function GenreList({films, currentGenre, onGenreChange}) {
  const onGenreClick = (evt) => {
    evt.preventDefault();

    onGenreChange(evt.target.textContent);
  };

  return (
    <ul className="catalog__genres-list">
      {getGenresList(films).map((genre, index) => (
        <li key ={genre} className={(genre === currentGenre) ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
          <a href="/" className="catalog__genres-link" onClick={onGenreClick}>{genre}</a>
        </li>
      ))}
    </ul>
  );
}

GenreList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  currentGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

export default GenreList;
