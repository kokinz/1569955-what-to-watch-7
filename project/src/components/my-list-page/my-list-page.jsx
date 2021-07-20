import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import filmProp from '../film-page/film.prop';
import {fetchFavoriteFilms} from '../../store/api-actions';
import {getFavoriteFilms} from '../../store/films-data/selectors';

import Logo from '../logo/logo';
import UserAvatar from '../user-avatar/user-avatar';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';

function MyListPage({favoriteFilms, loadData}) {

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserAvatar />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <FilmList films={favoriteFilms}></FilmList>
        </div>
      </section>
      <Footer />
    </div>
  );
}

MyListPage.propTypes = {
  favoriteFilms: PropTypes.arrayOf(filmProp).isRequired,
  loadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadData() {
    dispatch(fetchFavoriteFilms());
  },
});

export {MyListPage};
export default connect(mapStateToProps, mapDispatchToProps)(MyListPage);
