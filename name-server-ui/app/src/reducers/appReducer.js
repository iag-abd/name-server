const INITIAL_STATE = {
  showAddRedirect: false
}
const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_REDIRECT':
      return {
        ...currentState, showAddRedirect: !currentState.showAddRedirect
      }
    default:
      return currentState
  }
}

export default appReducer
