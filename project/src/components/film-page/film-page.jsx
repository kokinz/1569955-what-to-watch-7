import React from 'react';
import {generatePath} from 'react-router';
import {useParams, useHistory, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import filmProp from '../film-page/film.prop';

import Logo from '../logo/logo';
import Tabs from './tabs/tabs';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';

function FilmPage({likeThisFilmsCount, films}) {
  const filmId = parseInt(useParams().id, 10);
  const history = useHistory();

  const film = films.find((movie) => (movie.id === filmId));
  const likeThisFilms = films.slice(0, likeThisFilmsCount);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo />
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
                </div>
              </li>
              <li className="user-block__item">
                <a href="/" className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => history.push(`/player/${film.id}`)}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={() => history.push('/mylist/')}>
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref={film.isFavorite ? '#in-list' : '#add'} />
                  </svg>
                  <span>My list</span>
                </button>
                <Link className="btn film-card__button" to={generatePath('/films/:id/review', {id: filmId})}>Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt="The Grand Budapest Hotel poster" width={218} height={327} />
            </div>
            <Tabs film={film} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <FilmList films={likeThisFilms}></FilmList>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

FilmPage.propTypes = {
  likeThisFilmsCount: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default FilmPage;
