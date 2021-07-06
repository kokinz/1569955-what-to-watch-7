import React from 'react';
import Moment from 'react-moment';

import filmProp from '../film.prop';

import {reviews} from '../../../mocks/reviews.js';

function ReviewsTab({film}) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length / 2).map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>
              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime="2016-12-24">
                  <Moment format="MMMM D, YYYY">
                    {review.date}
                  </Moment>
                </time>
              </footer>
            </blockquote>
            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length / 2).map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>
              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime="2016-12-24">
                  <Moment format="MMMM D, YYYY">
                    {review.date}
                  </Moment>
                </time>
              </footer>
            </blockquote>
            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

ReviewsTab.propTypes = {
  film: filmProp,
};

export default ReviewsTab;
