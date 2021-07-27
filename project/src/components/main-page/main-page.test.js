import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';
import MainPage from './main-page';

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
},
{
  id: 2,
  name: 'What We Do in the Shadows',
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
  genre: 'Comedy',
  released: 1994,
  isFavorite: true,
}];

jest.mock('../../store/api-actions', () => {
  const mockFetch = () => ({type: 'loadFilm', payload: {...films}});
  return {
    __esModule: true,
    getFilmsByGenre: mockFetch,
    changeGenre: mockFetch,
    fetchPromoFilm: mockFetch,
  };
});


describe('Component: MainPage', () => {
  beforeAll(() => {
    Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
      set: jest.fn(),
      get: () => jest.fn(),
    });

    const history = createMemoryHistory();

    const createFakeStore = configureStore({});

    const store = createFakeStore({
      USER_DATA: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      FILMS_DATA: {genre: 'All genres', films: films, favoriteFilms: films, promoFilm: {...films}, film: {...films}, filmsByGenre: films, isDataLoaded: true},
      REVIEWS_DATA: {},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <MainPage />
        </Router>
      </Provider>
    );
  });

  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
    expect(screen.getByText(/Crime/i)).toBeInTheDocument();
    expect(screen.getByText(/Pulp Fiction/i)).toBeInTheDocument();
  });
});
