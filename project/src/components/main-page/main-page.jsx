import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

import filmProp from '../film-page/film.prop';

import Logo from '../logo/logo';
import GenreList from '../genre-list/genre-list';
import FilmList from '../film-list/film-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import Footer from '../footer/footer';

import {SHOW_MORE_FILMS_COUNT} from '../../const.js';

function MainPage({films, genre, onGenreChange, filmsByGenre}) {
  const history = useHistory();
  const [shownFilmsCount, setShownFilmsCount] = useState(Math.min(filmsByGenre.length, SHOW_MORE_FILMS_COUNT));

  useEffect(() => {
    setShownFilmsCount(SHOW_MORE_FILMS_COUNT);
  }, [filmsByGenre]);

  const handleShowMoreClick = () => {
    setShownFilmsCount(shownFilmsCount + SHOW_MORE_FILMS_COUNT);
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="/">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{films[0].name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{films[0].genre}</span>
                <span className="film-card__year">{films[0].name.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => history.push(`/player/${films[0].id}`)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={() => history.push('/mylist/')}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList films={films} currentGenre={genre} onGenreChange={onGenreChange}/>

          <div className="catalog__films-list">
            <FilmList films={filmsByGenre.slice(0, shownFilmsCount)} />
          </div>

          <div className="catalog__more">
            {shownFilmsCount < filmsByGenre.length ? <ShowMoreButton handleShowMoreClick={handleShowMoreClick} /> : ''}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

MainPage.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  genre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  filmsByGenre: PropTypes.arrayOf(filmProp).isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films,
  filmsByGenre: state.filmsByGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getFilmsByGenre());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
