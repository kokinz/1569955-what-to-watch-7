import React, {useRef} from 'react';
import {Redirect} from 'react-router-dom';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getAuthorizationStatus} from '../../store/user-data/selectors.js';

import Logo from '../logo/logo';
import Footer from '../footer/footer';

import {checkAuthorized} from '../../utils.js';
import {login} from '../../store/api-actions';
import {AppRoute} from '../../const.js';

function SignInPage({authorizationStatus, onSubmit}) {
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    checkAuthorized(authorizationStatus) ?
      <Redirect to={AppRoute.MAIN}></Redirect> :

      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form">
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit" onClick={handleSubmit}>Sign in</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
  );
}

SignInPage.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

export {SignInPage};
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
