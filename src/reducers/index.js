import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import commentsReducer from './commentsReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
  router: routerReducer
});

export default rootReducer;