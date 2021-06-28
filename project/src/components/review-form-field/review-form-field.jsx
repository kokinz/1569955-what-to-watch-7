import React from 'react';
import PropTypes from 'prop-types';

function ReviewFormField(props) {
  const {index, value, handleRatingChange} = props;

  return (
    <>
      <input className="rating__input" id={`star-${index}`} type="radio" name="rating" defaultValue={index} checked={value === index} onChange={handleRatingChange}/>
      <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
    </>
  );
}

ReviewFormField.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
};

export default ReviewFormField;
