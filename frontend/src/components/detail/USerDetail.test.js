/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import UserDetail from './UserDetail';

jest.mock('../../redux/actions/userActions');

const buildStore = configureStore([thunk]);

describe('UserDetail', () => {
  let wrapper;

  const wrapperFactory = (wrapperInitialState) => {
    const store = buildStore(wrapperInitialState);
    store.dispatch = jest.fn();

    return ({ children }) => (
      <Provider store={store}>

        {children}

      </Provider>
    );
  };

  afterEach(() => {
    jest.restoreAllMocks();
    wrapper = null;
  });
  test('should render submit button', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<UserDetail />, { wrapper });

    expect(document.getElementById('user_stance')).toHaveTextContent('stance:');
  });
});
