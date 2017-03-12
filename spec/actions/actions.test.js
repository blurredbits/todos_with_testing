import * as actions from '../../src/actions/TodoActions';
import * as types from '../../src/constants/ActionTypes';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: types.ADD_TODO,
      text
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });

  it('should create an action to set visibility of todo', () => {
    const filter = 'SHOW_ACTIVE';
    const expectedAction = {
      type: types.SET_VISIBILITY_FILTER,
      filter
    };
    expect(actions.setVisibility(filter)).toEqual(expectedAction);
  });

  it('should create an action to toggle a todo', () => {
    const id = 1;
    const expectedAction = {
      type: types.TOGGLE_TODO,
      id
    };
    expect(actions.toggleTodo(id)).toEqual(expectedAction);
  })
});
