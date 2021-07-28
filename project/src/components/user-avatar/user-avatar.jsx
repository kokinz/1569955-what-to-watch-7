import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getAuthorizationStatus} from '../../store/user-data/selectors.js';

import {checkAuthorized} from '../../utils.js';
import {logout} from '../../store/api-actions';
import {AppRoute} from '../../const.js';

function UserAvatar({authorizationStatus, onLogout}) {
  const history = useHistory();

  const handleLogout = (evt) => {
    evt.preventDefault();

    onLogout();
  };

  return (
    checkAuthorized(authorizationStatus) ?
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar" onClick={() => history.push(AppRoute.MY_LIST)}>
            <img src="https://kokinz.github.io/1569955-what-to-watch-7/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link" href="/" onClick={handleLogout}>Sign out</a>
        </li>
      </ul> :
      <div className="user-block">
        <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      </div>
  );
}

UserAvatar.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
});

export {UserAvatar};
export default connect(mapStateToProps, mapDispatchToProps)(UserAvatar);
