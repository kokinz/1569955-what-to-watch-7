import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {checkAuthorized} from '../../utils.js';
import {AppRoute} from '../../const.js';

function UserAvatar({authorizationStatus}) {
  return (
    checkAuthorized(authorizationStatus) ?
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" onClick={() => <Redirect to={AppRoute.MY_LIST}></Redirect>}/>
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link" href="/">Sign out</a>
        </li>
      </ul> :
      <div className="user-block">
        <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      </div>
  );
}

UserAvatar.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {UserAvatar};
export default connect(mapStateToProps)(UserAvatar);
