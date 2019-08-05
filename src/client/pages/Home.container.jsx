/**
 * Home.container.jsx
 * Container for Home page
 */

// Node Modules
import {connect} from 'react-redux';

// Actions
import {addTodoItem, removeTodoItem} from '../actions/todos';

// Component
import HomePageComponent from './Home.component';

const mapStateToProps = (state) => ({
  todoList: state.todos.list,
});

const mapDispatchToProps = (dispatch) => ({
  addTodoItem: (todoItem) => dispatch(addTodoItem(todoItem)),
  removeTodoItem: (todoId) => dispatch(removeTodoItem(todoId)),
});

export const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePageComponent);
