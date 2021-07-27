import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {postReview} from '../../store/api-actions.js';

import ReviewFormField from '../review-form-field/review-form-field';

import {RATING_COUNT, COMMENT_MAX_LENGTH, COMMENT_MIN_LENGTH, SUBMIT_ERROR_DELAY} from '../../const';

function ReviewForm({id, onSubmit}) {
  const [data, setData] = useState({
    rating: 7,
    comment: '',
    isButtonDisabled: true,
    isFormDisabled: false,
    isSubmitError: false,
  });

  const {rating, comment} = data;

  const handleRatingChange = (evt) => {
    setData({
      ...data,
      rating: Number(evt.target.value),
    });
  };

  const handleTextChange = (evt) => {
    const commentLength = evt.target.value.length;

    if (commentLength >= COMMENT_MIN_LENGTH) {
      setData({
        ...data,
        isButtonDisabled: false,
        comment: evt.target.value,
      });
    } else {
      setData({
        ...data,
        isButtonDisabled: true,
        comment: evt.target.value,
      });
    }
  };

  const handleSubmitError = () => {
    setData({
      ...data,
      isSubmitError: true,
      isFormDisabled: true,
    });

    setTimeout(() => {
      setData({
        ...data,
        isSubmitError: false,
        isFormDisabled: false,
      });
    }, SUBMIT_ERROR_DELAY);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setData({
      ...data,
      isFormDisabled: true,
    });

    onSubmit({
      id: id,
      rating: data.rating,
      comment: data.comment,
    }, handleSubmitError);
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {Array.from({length: RATING_COUNT}).map((element, index) => {
            const keyValue = `${element}-${index}`;
            return (
              <ReviewFormField index={RATING_COUNT - index} value={rating} handleRatingChange={handleRatingChange} isDisabled={data.isFormDisabled} key={keyValue}/>
            );
          })}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" cols={30} placeholder="Review text" value={comment} maxLength={COMMENT_MAX_LENGTH} onInput={handleTextChange} disabled={data.isFormDisabled}/>
        <div className="add-review__submit">
          {data.isSubmitError ? <p style={{color: '#FF0000'}}>Ошибка отправки отзыва</p> : <button className="add-review__btn" type="submit" disabled={data.isButtonDisabled || data.isFormDisabled}>Post</button>}
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
  onSubmit(authData, handleSubmitError) {
    dispatch(postReview(authData, handleSubmitError));
  },
});

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
