import {
  ADD_COMMENT,
  REMOVE_COMMENT
} from './actionTypes'

// add comment
export function addComment(postId, author, comment) {
  return {
    type: ADD_COMMENT,
    postId,
    author,
    comment
  };
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: REMOVE_COMMENT,
    i,
    postId
  }
}