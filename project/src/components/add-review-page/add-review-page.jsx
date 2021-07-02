import React from 'react';
import {generatePath} from 'react-router';
import {useParams, Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import filmProp from '../film-page/film.prop';

import Logo from '../logo/logo';
import ReviewForm from '../review-form/review-form';

function AddReviewPage({films}) {
  const filmId = parseInt(useParams().id, 10);
  const film = films.find((movie) => (movie.id === filmId));

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={generatePath('/films/:id/', {id: filmId})} className="breadcrumbs__link">{film.name}l</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="/">Add review</a>
              </li>
            </ul>
          </nav>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="/">Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <ReviewForm />
      </div>
    </section>
  );
}

AddReviewPage.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default AddReviewPage;
