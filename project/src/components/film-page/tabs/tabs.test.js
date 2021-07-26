import React from 'react';
import {render, screen} from '@testing-library/react';
import Tabs from './tabs';

const film = {
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
};

const reviews = [{
  id: 1,
  rating: 8.0,
  comment: 'Some comment',
  date: '2021-07-15T08:50:43.833Z',
  user: {
    id: 1,
    name: 'John',
  },
}];

describe('Component: Tabs', () => {
  it('should render correctly', () => {
    render(
      <Tabs film={film} reviews={reviews} />,
    );

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });
});
