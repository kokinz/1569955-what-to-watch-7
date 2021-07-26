import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FilmList from './film-list';

const films = [{
  id: 1,
  name: 'Pulp Fiction',
  posterImage: 'https://7.react.pages.academy…ction.jpg',
  previewImage: 'https://7.react.pages.academy…ction.jpg',
  backgroundImage: 'https://7.react.pages.academy…ction.jpg',
  backgroundColor: '#795433',
  videoLink: 'https://upload.wikimedia.org/…360p.webm',
  previewVideoLink: 'mock link',
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

describe('Component: FilmList', () => {
  beforeAll(() => {
    Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
      set: jest.fn(),
      get: () => jest.fn(),
    });
  });

  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <FilmList films={films} />
      </Router>,
    );

    expect(screen.getByText(/Pulp Fiction/i)).toBeInTheDocument();
  });
});
