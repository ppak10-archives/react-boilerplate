/**
 * TodoList.jsx
 * Component to render items in the todo list
 */

// Node Modules
import React from 'react';

// Constants
import {TODO_ITEMS} from '../constants/proptypes';

export const TodoList = ({removeTodoItem, todoList}) => {
  const todoItemsHtml = todoList.map((item, index) => (
    <button
      className="btn btn-primary btn-lg btn-block"
      key={index}
      onClick={() => removeTodoItem(item.id)}
      type="button"
    >
      {item.name}
    </button>
  ));

  return todoItemsHtml;
};

TodoList.propTypes = {
  todoList: TODO_ITEMS,
};
