/**
 * todos.js
 * Reducer for todo actions
 */

const initialState = {
  list: [
    {
      name: 'hello world',
      id: 0,
    },
    {
      name: 'test',
      id: 1,
    },
  ],
  nextId: 2,
};

export const todos = (state = initialState, {type, ...payload}) => {
  switch (type) {
    case 'ADD_TODO_ITEM':
      return {
        ...state,
        list: [
          ...state.list,
          {
            name: payload.todoItem,
            id: state.nextId,
          },
        ],
        nextId: (state.nextId += 1),
      };
    case 'REMOVE_TODO_ITEM':
      return {
        ...state,
        list: [...state.list.filter((item) => item.id !== payload.todoId)],
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
