import { combineReducers } from 'redux'
import postReducers from './postReducers'
import userReducers from './userReducers'

export default combineReducers({
  posts: postReducers,
  users:userReducers
})