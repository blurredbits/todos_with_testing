import { ADD_TODO, TOGGLE_TODO } from '../constants/ActionTypes';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

function todos(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]
    case TOGGLE_TODO:
      return state.map( item => {
        if (item.id !== action.id) {
          return item;
        }
        item.completed = !item.completed;
        return { ...item }
      })
    default:
      return state
  }
}

export default todos
