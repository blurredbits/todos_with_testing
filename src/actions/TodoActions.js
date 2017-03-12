export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
};

export function setVisibility(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};
