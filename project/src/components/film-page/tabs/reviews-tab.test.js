import React from 'react';
import {render, screen} from '@testing-library/react';
import ReviewsTab from './reviews-tab';

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

describe('Component: ReviewsTab', () => {
  it('should render correctly', () => {
    render(
      <ReviewsTab reviews={reviews} />,
    );

    expect(screen.getByText(/Some comment/i)).toBeInTheDocument();
    expect(screen.getByText(/John/i)).toBeInTheDocument();
    expect(screen.getByText(/2021/i)).toBeInTheDocument();
    expect(screen.getByText(/8/i)).toBeInTheDocument();
  });
});
