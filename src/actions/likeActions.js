import { INCREMENT_LIKES } from './actionTypes'

// increment likes
export function increment(index) {
  return {
    type: INCREMENT_LIKES,
    index
  }
}