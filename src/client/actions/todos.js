/**
 * todos.js
 * Actions for todos
 */

export const addTodoItem = (todoItem) => ({
  type: 'ADD_TODO_ITEM',
  todoItem,
});

export const removeTodoItem = (todoId) => ({
  type: 'REMOVE_TODO_ITEM',
  todoId,
});
