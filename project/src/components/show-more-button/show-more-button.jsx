import React from 'react';
import PropTypes from 'prop-types';

function ShowMoreButton({onShowMoreClick}) {
  return (
    <button className="catalog__button" type="button" onClick={onShowMoreClick}>Show more</button>
  );
}

ShowMoreButton.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired,
};

export default ShowMoreButton;
