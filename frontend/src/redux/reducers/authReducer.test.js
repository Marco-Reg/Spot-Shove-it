import reducer from './authReducer';
import * as actions from '../actions/listActions';

describe('spot reducer', () => {
  test('should return the initial State', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  test('should handle LOAD_SPOTS', () => {
    const startAction = {
      type: actions.LOAD_SPOTS,
    };
    expect(reducer({}, startAction)).toEqual({});
  });
});
