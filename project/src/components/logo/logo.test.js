import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText, getAllByText} = render(
      <Router history={history}>
        <Logo />
      </Router>,
    );
    const logoElements = getAllByText('W');
    const logoElement = getByText('T');

    logoElements.forEach((element) => expect(element).toBeInTheDocument());

    expect(logoElement).toBeInTheDocument();
  });
});
