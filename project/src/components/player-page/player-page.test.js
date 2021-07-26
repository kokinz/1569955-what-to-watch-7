import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PlayerPage from './player-page';

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


describe('Component: PlayerPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/player/1');
    render(
      <Router history={history}>
        <Route exact path='/player/:id'>
          <PlayerPage films={films} />
        </Route>
      </Router>,
    );

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Pulp Fiction/i)).toBeInTheDocument();
    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
  });
});
