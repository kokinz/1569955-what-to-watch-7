import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import UserAvatar from './user-avatar';
import {AuthorizationStatus} from '../../const.js';

let store = null;

const mockStore = configureStore({});
store = mockStore({
  USER_DATA: {authorizationStatus: AuthorizationStatus.AUTH},
});

describe('Component: UserAvatar', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router history={history}>
          <UserAvatar authorizationStatus={AuthorizationStatus.AUTH} onLogout={() => {}} />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});
