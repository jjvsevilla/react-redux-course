import { INCREMENT_LIKES } from './actionTypes'

export function increment(index) {
  return {
    type: INCREMENT_LIKES,
    index
  }
}