import React from 'react';
import PropTypes from 'prop-types';

function ReviewFormField({index, value, handleRatingChange, isDisabled}) {
  return (
    <>
      <input className="rating__input" id={`star-${index}`} type="radio" name="rating" defaultValue={index} checked={value === index} onChange={handleRatingChange} disabled={isDisabled} />
      <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
    </>
  );
}

ReviewFormField.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default ReviewFormField;
