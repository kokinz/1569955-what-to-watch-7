import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeGenre, getFilmsByGenre} from '../../store/action.js';
import {fetchPromoFilm} from '../../store/api-actions';

import {getGenre, getPromoFilm, getFilms, getFilmsByGenres} from '../../store/films-data/selectors.js';

import filmProp from '../film-page/film.prop';

import Logo from '../logo/logo';
import UserAvatar from '../user-avatar/user-avatar';
import MyListButton from '../my-list-button/my-list-button';
import GenreList from '../genre-list/genre-list';
import FilmList from '../film-list/film-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import Footer from '../footer/footer';
import LoadingScreen from '../loading-screen/loading-screen.jsx';

import {SHOW_MORE_FILMS_COUNT} from '../../const.js';

function MainPage({loadPromo, films, genre, onGenreChange, filmsByGenre, promoFilm}) {
  const history = useHistory();
  const [shownFilmsCount, setShownFilmsCount] = useState(Math.min(filmsByGenre.length, SHOW_MORE_FILMS_COUNT));

  useEffect(() => {
    setShownFilmsCount(SHOW_MORE_FILMS_COUNT);
  }, [filmsByGenre]);

  useEffect(() => {
    loadPromo();

    if (!promoFilm.id) {
      return (<LoadingScreen />);
    }
  }, [loadPromo, promoFilm.id]);

  const handleShowMoreClick = () => {
    setShownFilmsCount(shownFilmsCount + SHOW_MORE_FILMS_COUNT);
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <UserAvatar />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => history.push(`/player/${promoFilm.id}`)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListButton film={promoFilm} />
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
  loadPromo: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
  promoFilm: PropTypes.shape(filmProp).isRequired,
  genre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  filmsByGenre: PropTypes.arrayOf(filmProp).isRequired,
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  promoFilm: getPromoFilm(state),
  films: getFilms(state),
  filmsByGenre: getFilmsByGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(changeGenre(genre));
    dispatch(getFilmsByGenre());
  },
  loadPromo() {
    dispatch(fetchPromoFilm());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
