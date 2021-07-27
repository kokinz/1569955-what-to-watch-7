import React from 'react';
import PropTypes from 'prop-types';

import filmProp from '../film.prop';
import {RatingLevel} from '../../../const.js';

const getLevel = (rating) => {
  if (Math.trunc(rating) === 10) {
    return RatingLevel.AWESOME;
  }
  if (Math.trunc(rating) >= 8) {
    return RatingLevel.VERY_GOOD;
  }
  if (Math.trunc(rating) >= 5) {
    return RatingLevel.GOOD;
  }
  if (Math.trunc(rating) >= 3) {
    return RatingLevel.NORMAL;
  }
  return RatingLevel.BAD;
};

function OverviewTab({film}) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getLevel(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film.starring.slice(0, 3).join(', ')} and other</strong></p>
      </div>
    </>
  );
}

OverviewTab.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
};

export default OverviewTab;
