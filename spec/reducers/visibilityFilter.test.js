import reducer from '../../src/reducers/visibilityFilter';
import * as types from '../../src/constants/ActionTypes';

describe('visibility filter', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual("SHOW_ALL")
  });

  it('should return the correct filter', () => {
    expect(reducer([], { type: types.SET_VISIBILITY_FILTER, filter: 'SHOW_ACTIVE'})).toEqual('SHOW_ACTIVE');
  });
})
