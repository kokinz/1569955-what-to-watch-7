import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ShowMoreButton from './show-more-button';

const handleShowMoreClick = () => {};

describe('Component: ShowMoreButton', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <ShowMoreButton handleShowMoreClick={handleShowMoreClick} />
      </Router>,
    );
    const element = getByText('Show more');

    expect(element).toBeInTheDocument();
  });
});
