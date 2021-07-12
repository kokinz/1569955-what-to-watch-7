import React from 'react';
import PropTypes from 'prop-types';

function ShowMoreButton({handleShowMoreClick}) {
  return (
    <button className="catalog__button" type="button" onClick={handleShowMoreClick}>Show more</button>
  );
}

ShowMoreButton.propTypes = {
  handleShowMoreClick: PropTypes.func.isRequired,
};

export default ShowMoreButton;
