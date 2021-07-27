import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ReviewFormField from './review-form-field';

const index = 1;
const value = 8.0;
const handleRatingChange = () => {};

describe('Component: ReviewFormField', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history={history}>
        <ReviewFormField index={index} value={value} handleRatingChange={handleRatingChange} isDisabled={false} />
      </Router>,
    );

    const element = getByText(`Rating ${index}`);

    expect(element).toBeInTheDocument();
  });
});
