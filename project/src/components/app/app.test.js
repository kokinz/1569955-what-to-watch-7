import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute} from '../../const';
import App from './app';

let history = null;
let store = null;
let fakeApp = null;

const films = [{
  id: 1,
  name: 'Pulp Fiction',
  posterImage: 'https://7.react.pages.academy…ction.jpg',
  previewImage: 'https://7.react.pages.academy…ction.jpg',
  backgroundImage: 'https://7.react.pages.academy…ction.jpg',
  backgroundColor: '#795433',
  videoLink: 'https://upload.wikimedia.org/…360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/…360p.webm',
  description: 'The lives of two mob hitmen, …demption.',
  rating: 1.5,
  scoresCount: 1635992,
  director: 'Quentin Tarantino',
  starring: ['John Travolta','Uma Thurman', 'Jackson'],
  runTime: 153,
  genre: 'Crime',
  released: 1994,
  isFavorite: true,
}];

jest.mock('../film-list/film-list', () => {
  const mockFilmsList = () => <>This is mock Films list</>;
  return {
    __esModule: true,
    default: mockFilmsList,
  };
});

jest.mock('../my-list-page/my-list-page', () => {
  const mockMyList= () => <>This is mock My list</>;
  return {
    __esModule: true,
    default: mockMyList,
  };
});

jest.mock('../../store/api-actions', () => {
  const mockFetch = () => ({type: 'loadFilm', payload: {...films}});
  return {
    __esModule: true,
    fetchPromoFilm: mockFetch,
  };
});

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});

    store = createFakeStore({
      USER_DATA: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      FILMS_DATA: {genre: 'All genres', films: films, favoriteFilms: films, promoFilm: {...films}, film: {...films}, filmsByGenre: films, isDataLoaded: true},
      REVIEWS_DATA: {},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.MAIN);
    render(fakeApp);

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
    expect(screen.getByText(/Crime/i)).toBeInTheDocument();
    expect(screen.getByText(/This is mock Films list/i)).toBeInTheDocument();
  });

  it('should render "SignInPage" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it('should render "MyList" when user navigate to "/mylist"', () => {
    const createFakeStore = configureStore({});

    store = createFakeStore({
      USER_DATA: {authorizationStatus: AuthorizationStatus.AUTH},
      FILMS_DATA: store.getState().FILMS_DATA,
      REVIEWS_DATA: store.getState().REVIEWS_DATA,
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    history.push(AppRoute.MY_LIST);
    render(fakeApp);

    expect(screen.getByText(/This is mock My list/i)).toBeInTheDocument();
  });

  it('should render "AddReview" when user navigate to "/films/:id/review"', () => {
    history.push('/films/1/review');
    render(fakeApp);

    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
