import {userData} from './user-data';
import {ActionType} from '../action';

describe('Reducer: userData', () => {
  it('without additional parameters should return initial state', () => {
    expect(userData(undefined, {}))
      .toEqual({
        authorizationStatus: 'UNKNOWN',
      });
  });

  it('should update status by given value', () => {
    const state = {
      authorizationStatus: 'UNKNOWN',
    };

    const action = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'AUTH',
    };

    expect(userData(state, action))
      .toEqual({
        authorizationStatus: 'AUTH',
      });
  });

  it('should update status by given action', () => {
    const state = {
      authorizationStatus: 'AUTH',
    };

    const action = {
      type: ActionType.LOGOUT,
    };

    expect(userData(state, action))
      .toEqual({
        authorizationStatus: 'NO_AUTH',
      });
  });
});
