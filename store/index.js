import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import collectedItems from './collectedItems';
import location from './location';
import tasksCompleted from './tasksCompleted';

const reducer = combineReducers({ collectedItems, location, tasksCompleted });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
  //createLogger({ collapsed: true })
);
const store = createStore(reducer, middleware);

export default store;
