/**
 * store.js
 * Redux Store
 */

// Node Modules
import {compose, createStore} from 'redux';

// Reducer
import {rootReducer} from './reducers';

// Compose Enhancers
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers =
  typeof window === 'object' && devTools
    ? devTools({
      // Specify extension’s options like:
      // name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

// Enhancer
const enhancer = composeEnhancers();
// applyMiddleWare(thunkMiddleware)
// other store enhancers go here i.e. redux-thunk

export const configureStore = (preloadedState) =>
  createStore(rootReducer, preloadedState, enhancer);
