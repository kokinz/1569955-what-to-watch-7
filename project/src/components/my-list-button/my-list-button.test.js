import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';
import MyListButton  from './my-list-button';

let fakeApp = null;

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

describe('Component: MyListButton', () => {
  beforeAll(() => {
    const history = createMemoryHistory();
    const createFakeStore = configureStore({});

    const store = createFakeStore({
      USER_DATA: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <MyListButton film={film}/>
        </Router>
      </Provider>
    );
  });

  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });
});

