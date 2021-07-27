import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {generatePath} from 'react-router';
import {useParams, useHistory, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import filmProp from '../film-page/film.prop';
import reviewProp from '../film-page/review.prop';
import {fetchFilm, fetchSimilarFilms, fetchReviews} from '../../store/api-actions';

import {getFilm, getSimilarFilms} from '../../store/films-data/selectors.js';
import {getAuthorizationStatus} from '../../store/user-data/selectors.js';
import {getReviews} from '../../store/reviews-data/selectors.js';

import Logo from '../logo/logo';
import UserAvatar from '../user-avatar/user-avatar';
import MyListButton from '../my-list-button/my-list-button';
import Tabs from './tabs/tabs';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';
import LoadingScreen from '../loading-screen/loading-screen.jsx';

import {LIKE_THIS_FILMS_COUNT} from '../../const.js';
import {checkAuthorized} from '../../utils.js';

function FilmPage({film, similarFilms, reviews, loadData, authorizationStatus}) {
  const filmId = parseInt(useParams().id, 10);
  const history = useHistory();

  const likeThisFilms = similarFilms.filter((movie) => movie.id !== filmId).slice(0, LIKE_THIS_FILMS_COUNT);

  useEffect(() => {
    loadData(filmId);
  }, [filmId, loadData]);

  if (filmId !== film.id) {
    return (<LoadingScreen />);
  }

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
            <UserAvatar />
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => history.push(`/player/${filmId}`)}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <MyListButton film={film} />
                {checkAuthorized(authorizationStatus) ? <Link className="btn film-card__button" to={generatePath('/films/:id/review', {id: filmId})}>Add review</Link> : ''}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt="The Grand Budapest Hotel poster" width={218} height={327} />
            </div>
            {film.id ? <Tabs film={film} reviews={reviews}/> : ''}
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          {likeThisFilms.length ? <h2 className="catalog__title">More like this</h2> : ''}
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
  loadData: PropTypes.func.isRequired,
  film: PropTypes.shape(filmProp).isRequired,
  similarFilms: PropTypes.arrayOf(filmProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  film: getFilm(state),
  similarFilms: getSimilarFilms(state),
  reviews: getReviews(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadData(filmId) {
    dispatch(fetchFilm(filmId));
    dispatch(fetchSimilarFilms(filmId));
    dispatch(fetchReviews(filmId));
  },
});

export {FilmPage};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
