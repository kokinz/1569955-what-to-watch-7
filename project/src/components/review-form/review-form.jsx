import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {postReview} from '../../store/api-actions.js';

import ReviewFormField from '../review-form-field/review-form-field';

import {RATING_COUNT} from '../../const';

function ReviewForm({id, onSubmit}) {
  const [data, setData] = useState({
    rating: 7,
    comment: '',
  });

  const {rating, comment} = data;

  const handleRatingChange = (evt) => {
    setData({
      ...data,
      rating: Number(evt.target.value),
    });
  };

  const handleTextChange = (evt) => {
    setData({
      ...data,
      comment: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      id: id,
      rating: data.rating,
      comment: data.comment,
    });
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {Array.from({length: RATING_COUNT}).map((element, index) => {
            const keyValue = `${element}-${index}`;
            return (
              <ReviewFormField index={RATING_COUNT - index} value={rating} handleRatingChange={handleRatingChange} key={keyValue}/>
            );
          })}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment} onChange={handleTextChange}/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(postReview(authData));
  },
});

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
