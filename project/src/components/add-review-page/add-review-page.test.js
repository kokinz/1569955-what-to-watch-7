import React from 'react';
import {render} from '@testing-library/react';
import {Route, Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import AddReviewPage from './add-review-page';
import {AuthorizationStatus} from '../../const.js';

let store = null;

const mockStore = configureStore({});
store = mockStore({
  USER_DATA: {authorizationStatus: AuthorizationStatus.AUTH},
});

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
  isFavorite: false,
}];

describe('Component: AddReviewPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    history.push('/films/1/review');

    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Route path='/films/:id/review'>
            <AddReviewPage films={films} />
          </Route>
        </Router>
      </Provider>,
    );

    const linkElement = getByText('Add review');

    expect(linkElement).toBeInTheDocument();
  });
});
