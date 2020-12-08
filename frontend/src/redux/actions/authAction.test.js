import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import actionTypes from './actionTypes';
import * as authAction from './authAction';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  describe('authAction', () => {
    let fakeData;
    let fakeError;
    let store;

    beforeEach(() => {
      store = mockStore();
      fakeData = { user: 'peperoni' };
      fakeError = 'error';
    });
    afterEach(() => {
      jest.resetAllMocks();
    });
    test('request with promise resolved shout put actiontypes.LOAD_GOOGLE_USER', async () => {
      axios.put = jest.fn().mockResolvedValueOnce(fakeData);
      await store.dispatch(authAction.loginUserWithGoogle());

      expect(store.getActions()[0].type).toBe(actionTypes.LOGIN_USER_GOOGLE);
    });
    test('request with promise resolved shout put actiontypes.LOAD_GOOGLE_USER', async () => {
      axios.put = jest.fn().mockRejectedValueOnce(fakeError);
      await store.dispatch(authAction.loginUserWithGoogle());

      expect(store.getActions()[0].type).toBe(actionTypes.LOGIN_ERROR);
    });
  });
});
