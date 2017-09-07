function commentsReducer(state = [], action) {
  console.log('comments reducer was called')
  console.log(state, action);
  return state;
}

export default commentsReducer;