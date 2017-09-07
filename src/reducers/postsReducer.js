function postsReducer(state = [], action) {
  console.log('posts reducer was called')
  console.log(state, action);
  return state;
}

export default postsReducer;