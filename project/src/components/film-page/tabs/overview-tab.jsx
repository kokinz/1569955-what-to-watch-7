import React from 'react';

import filmProp from '../film.prop';

const getLevel = (rating) => {
  if (Math.trunc(rating) === 10) {
    return 'Awesome';
  }
  if (Math.trunc(rating) >= 8) {
    return 'Very good';
  }
  if (Math.trunc(rating) >= 5) {
    return 'Good';
  }
  if (Math.trunc(rating) >= 3) {
    return 'Normal';
  }
  return 'Bad';
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
  film: filmProp,
};

export default OverviewTab;
