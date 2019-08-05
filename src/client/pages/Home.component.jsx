/**
 * Home.component.jsx
 * Home page component
 */

// Node Modules
import React, {useState} from 'react';

// Components
import {TodoList} from '../components/TodoList';

// Constants
import {ACTION, TODO_ITEMS} from '../constants/proptypes';

const HomePage = (props) => {
  // State
  const [todoItem, setTodoItem] = useState('');

  const submit = () => {
    props.addTodoItem(todoItem);
    setTodoItem('');
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          className="form-control"
          onChange={(e) => setTodoItem(e.target.value)}
          placeholder="Add Todo Item"
          type="text"
          value={todoItem}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            onClick={submit}
            type="button"
          >
            Add
          </button>
        </div>
      </div>
      <TodoList todoList={props.todoList} />
    </div>
  );
};

HomePage.propTypes = {
  addTodoItem: ACTION,
  todoList: TODO_ITEMS,
};

export default HomePage;
