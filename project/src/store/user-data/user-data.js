import {ActionType} from '../action.js';
import {AuthorizationStatus} from '../../const.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {userData};
