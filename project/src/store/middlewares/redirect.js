import browserHistory from '../../browser-history.js';
import {ActionType} from '../action.js';

const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(`/1569955-what-to-watch-7/#${action.payload}`);
    window.location.reload();
  }

  return next(action);
};

export {redirect};
