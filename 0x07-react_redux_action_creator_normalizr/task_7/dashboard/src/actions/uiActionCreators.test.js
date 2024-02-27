import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest } from './uiActionCreators';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should dispatch LOGIN_SUCCESS when loginRequest succeeds', () => {
    fetchMock.getOnce('/login-success.json', { status: 200 });
    const expectedActions = [{ type: 'LOGIN' }, { type: LOGIN_SUCCESS }];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch LOGIN_FAILURE when loginRequest fails', () => {
    fetchMock.getOnce('/login-success.json', { status: 404 });
    const expectedActions = [{ type: 'LOGIN' }, { type: LOGIN_FAILURE }];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

