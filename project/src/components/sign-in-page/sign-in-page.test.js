import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import SignInPage from './sign-in-page';
import {AuthorizationStatus} from '../../const.js';

let store = null;

const mockStore = configureStore({});
store = mockStore({
  USER_DATA: {authorizationStatus: AuthorizationStatus.NO_AUTH},
});

describe('Component: SignInPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getAllByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <SignInPage />
        </Router>
      </Provider>,
    );

    const signInElements = getAllByText('Sign in');

    signInElements.forEach((element) => expect(element).toBeInTheDocument());

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('login'), 'Sancho');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/Sancho/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
