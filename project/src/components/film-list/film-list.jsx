import React from 'react';
import FilmCard from '../film-card/film-card';
import PropTypes from 'prop-types';
import filmProp from '../film-page/film.prop';

function FilmList({films}) {
  return (
    <>
      {films.map((film) => (
        <FilmCard key = {film.id}
          film = {film}
        />
      ))}
    </>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default FilmList;
