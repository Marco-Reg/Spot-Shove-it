import reducer from './listReducer';
import * as actions from '../actions/listActions';
import { LOAD_SPOTS, LOAD_SPOTS_ERROR } from '../actions/actionTypes';

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
