// import dependencies
import { createStore, /*combineReducers, */ applyMiddleware } from 'redux';
import { /*routerReducer, */ routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

// import rootReducer
import rootReducer from './reducers'

// load initial data
import comments from './data/comments';
import posts from './data/posts';

// create the rootReducer
// const rootReducer = combineReducers({
//   ...reducers,
//   router: routerReducer
// }),

// create an object for the default state
const defaultState = {
  posts,
  comments
}

export const history = createHistory();

const middleware = routerMiddleware(history);

const enhancer = applyMiddleware(middleware);

// create the store: createStore(reducer, [preloadedState], [enhancer])
const store = createStore(
  rootReducer,
  defaultState,
  enhancer
);

export default store;