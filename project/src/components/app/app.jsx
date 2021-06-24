import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {AppRoute} from '../../const';

import MainPage from '../main-page/main-page';
import SignInPage from '../sign-in-page/sign-in-page';
import MyListPage from '../my-list-page/my-list-page';
import FilmPage from '../film-page/film-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPage from '../player-page/player-page';
import NotFounfPage from '../not-found-page/not-found-page';


function App(props) {
  const {filmsCount, filmName, filmGenre, filmYear} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage
            filmsCount={filmsCount}
            filmName={filmName}
            filmGenre={filmGenre}
            filmYear={filmYear}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignInPage />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyListPage />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmPage />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReviewPage />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <PlayerPage />
        </Route>
        <Route>
          <NotFounfPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  filmsCount: PropTypes.number.isRequired,
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmYear: PropTypes.string.isRequired,
};

export default App;
