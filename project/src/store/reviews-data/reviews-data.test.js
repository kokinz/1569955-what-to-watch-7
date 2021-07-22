import {reviewsData} from './reviews-data';
import {ActionType} from '../action';

describe('Reducer: reviewsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(reviewsData(undefined, {}))
      .toEqual({
        reviews: [],
      });
  });

  it('should update reviews by load reviews', () => {
    const state = {
      reviews: [],
    };

    const action = {
      type: ActionType.LOAD_REVIEWS,
      payload: ['review#1', 'review#2', 'review#3'],
    };

    expect(reviewsData(state, action))
      .toEqual({
        reviews: ['review#1', 'review#2', 'review#3'],
      });
  });
});
