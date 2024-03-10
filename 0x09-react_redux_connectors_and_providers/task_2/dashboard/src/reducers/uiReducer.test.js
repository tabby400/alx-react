import uiReducer from './uiReducer';
import * as types from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should handle LOGIN action', () => {
    const action = {
      type: types.LOGIN_SUCCESS,
      user: { username: 'testUser' },
    };
    const newState = uiReducer(undefined, action);
    expect(newState.user).toEqual(action.user);
    expect(newState.isUserLoggedIn).toBe(true);
  });

});
