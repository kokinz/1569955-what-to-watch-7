import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';
import FilmPage from './film-page';

let store = null;

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

jest.mock('../../store/api-actions', () => {
  const mockFetch = () => ({type: 'loadFilm', payload: {...films}});
  return {
    __esModule: true,
    fetchFilm: mockFetch,
    fetchSimilarFilms: mockFetch,
    fetchReviews: mockFetch,
  };
});

describe('Component: FilmPage', () => {
  beforeAll(() => {
    Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
      set: jest.fn(),
      get: () => jest.fn(),
    });

    const createFakeStore = configureStore({});

    store = createFakeStore({
      USER_DATA: {authorizationStatus: AuthorizationStatus.NO_AUTH},
      FILMS_DATA: {genre: 'All genres', films: films, film: {...films}, favoriteFilms: films, promoFilm: {...films}, filmsByGenre: films, similarFilms: films, isDataLoaded: true},
      REVIEWS_DATA: {reviews: []},
    });
  });

  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <FilmPage />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Pulp Fiction/i)).toBeInTheDocument();
  });
});
