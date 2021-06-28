import React from 'react';
import {generatePath} from 'react-router';
import {Link} from 'react-router-dom';

import filmProp from '../film-page/film.prop';

function FilmCard(props) {
  const {film} = props;
  const {id, name, previewImage} = film;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt="Pulp Fiction" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath('/films/:id/', {id: id})}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: filmProp,
};

export default FilmCard;
