import _ from 'lodash'
import placeholderApi from '../apis/jasonPlaceholder'



export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()

}

export const fetchPosts = () => async dispatch => {
  const response = await placeholderApi.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = (id) => async dispatch => {
  const response = await placeholderApi.get(`/users/${id}`)
  dispatch({ type: 'FETCH_USERS', payload: response.data })
}


// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await placeholderApi.get(`/users/${id}`)
//   dispatch({ type: 'FETCH_USERS', payload: response.data })
// });

