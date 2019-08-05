/**
 * todos.js
 * Reducer for todo actions
 */

const initialState = {
  list: ['hello world', 'test'],
};

export const todos = (state = initialState, {type, ...payload}) => {
  switch (type) {
    case 'ADD_TODO_ITEM':
      return {
        ...state,
        list: [...state.list, payload.todoItem],
      };
    case 'REMOVE_TODO_ITEM':
      return {
        ...state,
      };
    case 'RESOLVE_TODO_ITEM':
      return {
        ...state,
      };
    case 'UNRESOLVE_TODO_ITEM':
      return {
        ...state,
      };
    default:
      return state;
  }
};
