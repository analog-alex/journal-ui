import { createStore } from 'redux'

function stateReducer (state = {
  auth: {
    logged: false,
    user: {}
  },
  posts: []
}, action) {
  switch (action.type) {
    case 'auth/on':
      return { ...state, auth: { logged: true, user: action.user } }
    case 'auth/off':
      return { ...state, auth: { logged: false, user: {} } }
    default:
      return state
  }
}

const store = createStore(stateReducer)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()))

export default store
