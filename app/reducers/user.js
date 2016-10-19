
import * as types from '../actions/actionsTypes';

const initialState = {
  users: {},
};

export default function users(state = initialState, action = {}) {
  switch (action.type) {
    case types.RECEIVE_USER:
      var users = state.users
      users[`${action.user.id}`] = action.user
      return Object.assign({}, state, {users: users})
      break;
    case types.POST_USER:
      var users = state.users
      users[`${action.user.id}`] = action.user
      return Object.assign({}, state, {users: users})
      break;
    default:
      return state;
  }
}
