import React from 'react';
import PropTypes from 'prop-types';

import filmProp from '../film-page/film.prop';

import Logo from '../logo/logo';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';

function MyListPage({films}) {
  const filteredFilms = films.slice().filter((film) => film.isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
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
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <FilmList films={filteredFilms}></FilmList>
        </div>
      </section>
      <Footer />
    </div>
  );
}

MyListPage.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default MyListPage;
