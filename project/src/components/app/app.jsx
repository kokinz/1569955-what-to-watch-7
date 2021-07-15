import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const';
import filmProp from '../film-page/film.prop';

import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import MyListPage from '../my-list-page/my-list-page';
import FilmPage from '../film-page/film-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPage from '../player-page/player-page';
import NotFounfPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';


function App({likeThisFilmsCount, films, authorizationStatus, isDataLoaded}) {
  if (authorizationStatus === AuthorizationStatus.UNKNOWN || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignInPage />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyListPage
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmPage
            films={films}
            likeThisFilmsCount={likeThisFilmsCount}
          />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReviewPage
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <PlayerPage
            films={films}
          />
        </Route>
        <Route>
          <NotFounfPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  likeThisFilmsCount: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
