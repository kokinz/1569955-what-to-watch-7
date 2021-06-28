import React, {useState} from 'react';
import FilmCard from '../film-card/film-card';
import PropTypes from 'prop-types';
import filmProp from '../film-page/film.prop';

function FilmList(props) {
  const {films} = props;
  const [activeFilmCard, setActiveFilmCard] = useState(0);

  return (
    <>
      {films.map((film) => (
        <FilmCard key = {film.id}
          activeFilmCard = {activeFilmCard}
          film = {film}
          onMouseEnter = {(evt) => {
            setActiveFilmCard(film.id);
          }}
        />
      ))}
    </>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default FilmList;
