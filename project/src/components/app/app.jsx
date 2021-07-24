import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const';
import filmProp from '../film-page/film.prop';

import {getFilms, getLoadedDataStatus} from '../../store/films-data/selectors.js';
import {getAuthorizationStatus} from '../../store/user-data/selectors.js';

import PrivateRoute from '../private-route/private-route';
import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import MyListPage from '../my-list-page/my-list-page';
import FilmPage from '../film-page/film-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPage from '../player-page/player-page';
import NotFounfPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';

function App({films, authorizationStatus, isDataLoaded}) {
  if (authorizationStatus === AuthorizationStatus.UNKNOWN || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <MainPage />
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <SignInPage />
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.MY_LIST}
        render={() => <MyListPage films={films} />}
      >
      </PrivateRoute>
      <Route exact path={AppRoute.FILM}>
        <FilmPage
          films={films}
        />
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.ADD_REVIEW}
        render={() => <AddReviewPage films={films} />}
      >
      </PrivateRoute>
      <Route exact path={AppRoute.PLAYER}>
        <PlayerPage
          films={films}
        />
      </Route>
      <Route>
        <NotFounfPage path={AppRoute.NOT_FOUND}/>
      </Route>
    </Switch>
  );
}

App.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
  isDataLoaded: getLoadedDataStatus(state),
});

export {App};
export default connect(mapStateToProps, null)(App);
