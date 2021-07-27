import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import ReviewForm from './review-form';

const id = 1;
const onSubmit = () => {};

const mockStore = configureStore({});
const store = mockStore();

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm id={id} onSubmit={onSubmit} />
        </Router>
      </Provider>,
    );
    const buttonElement = getByText('Post');

    expect(buttonElement).toBeInTheDocument();
  });
});
