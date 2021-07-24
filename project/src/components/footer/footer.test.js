import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <Footer />
      </Router>,
    );

    const copyRightElement = getByText('© 2019 What to watch Ltd.');

    expect(copyRightElement).toBeInTheDocument();
  });
});
