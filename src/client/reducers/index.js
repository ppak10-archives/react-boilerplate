/**
 * index.js
 * Root Reducer
 */

// Node Modules
import {combineReducers} from 'redux';

// Reducers
import {todos} from './todos';

export const rootReducer = combineReducers({
  todos,
});
