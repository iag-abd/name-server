const INITIAL_STATE = {
  redirects:[],
  redirect:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  redirectToDelete: null,
  showEditModal: false,
  redirectToEdit: null,
}
export const redirectReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_REDIRECTS_REQUEST':
      return {
        ...currentState,
        redirects: [],
        redirect: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        redirectToDelete: null,
        showEditModal: false,
        redirectToEdit: null,
      }
    case 'FETCH_REDIRECTS_SUCCESS':
      return {
        ...currentState,
        redirects: action.redirects,
        redirect: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        redirectToDelete: null,
        showEditModal: false,
        redirectToEdit: null,
      }
    case 'FETCH_REDIRECTS_FAILED':
      return {
        ...currentState,
        redirects: [],
        redirect: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        redirectToDelete: null,
        showEditModal: false,
        redirectToEdit: null,
      }
    case 'FETCH_REDIRECT_REQUEST':
      return {
        ...currentState,
        redirects: currentState.redirects,
        redirect: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        redirectToDelete: null,
        showEditModal: false,
        redirectToEdit: null,
      }
    case 'FETCH_REDIRECT_SUCCESS':
      return {
        ...currentState,
        redirects: currentState.redirects,
        redirect: action.redirect,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        redirectToDelete: null,
        showEditModal: false,
        redirectToEdit: null,
      }
    case 'FETCH_REDIRECT_FAILED':
      return {
        ...currentState,
        redirects: [],
        redirect: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        redirectToDelete: null,
        showEditModal: false,
        redirectToEdit: null,
      }
    case 'ADD_NEW_REDIRECT_REQUEST':
      return {
        ...currentState,
        redirects:currentState.redirects,
        redirect:null,
        isFetching: true,
        error: null,
        successMsg:null,
        showDeleteModal: false,
        redirectToDelete: null,
        showEditModal: false,
        redirectToEdit: null,
        newRedirect: action.redirect
      }
    case 'ADD_NEW_REDIRECT_REQUEST_FAILED':
      return {
        ...currentState,
        redirects:currentState.redirects,
        redirect:null,
        isFetching: true,
        error: action.error,
        successMsg:null,
        showDeleteModal: false,
        redirectToDelete: null,
        showEditModal: false,
        redirectToEdit: null,
        newRedirect: null
      }
    case 'ADD_NEW_REDIRECT_REQUEST_SUCCESS':
      return {
        ...currentState,
        redirects:[...currentState.redirects, action.redirect],
        redirect:null,
        isFetching: false,
        error: null,
        successMsg:action.message,
        showDeleteModal: false,
        redirectToDelete: null,
        showEditModal: false,
        redirectToEdit: null,
        newRedirect: action.redirect
      }
    case 'DELETE_REDIRECT_REQUEST_SUCCESS':
      const filteredRedirects = currentState.redirects.filter((redirect) => redirect.shortname !== action.redirect.shortname)
      return {
        ...currentState,
        redirects:filteredRedirects,
        redirect:null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        redirectToDelete: null,
        showEditModal: false,
        redirectToEdit: null,
        newRedirect: null
      }
    case 'DELETE_REDIRECT_REQUEST_FAILED':
      return {
        ...currentState,
        redirects: currentState.redirects,
        redirect: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        redirectToDelete: null,
        showEditModal: false,
        redirectToEdit: null,
        newRedirect: null
      }
    default:
      return currentState
  }
}
