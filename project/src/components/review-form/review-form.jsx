import React, {useState} from 'react';

import ReviewFormField from '../review-form-field/review-form-field';

import {RATING_COUNT} from '../../const';

function ReviewForm() {
  const [data, setData] = useState({
    rating: 7,
    comment: '',
  });

  const {rating, comment} = data;

  function handleRatingChange(evt) {
    setData({
      ...data,
      rating: Number(evt.target.value),
    });
  }

  function handleTextChange(evt) {
    setData({
      ...data,
      comment: evt.target.value,
    });
  }

  return (
    <form action="#" className="add-review__form">
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

export default ReviewForm;
