import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import filmProp from '../film-page/film.prop';

import {postFavorite} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-data/selectors.js';
import {AppRoute, AuthorizationStatus} from '../../const';

function MyListButton({film, authorizationStatus, onSubmit}) {
  const history = useHistory();
  const [isFavorite, setIsFavorite] = useState(film.isFavorite);

  useEffect(() => {
    setIsFavorite(film.isFavorite);
  }, [film]);

  const handleMyListButtonClick = (evt) => {
    evt.preventDefault();

    if (authorizationStatus === AuthorizationStatus.AUTH) {
      setIsFavorite((prevState) => {
        const state = prevState ? 0 : 1;

        onSubmit({id: film.id, state});

        return !prevState;
      });

      return;
    }

    history.push(AppRoute.LOGIN);
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleMyListButtonClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite && authorizationStatus === AuthorizationStatus.AUTH ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

MyListButton.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(statusData) {
    dispatch(postFavorite(statusData));
  },
});

export {MyListButton};
export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
