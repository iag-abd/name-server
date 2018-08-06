//todo: need to update the host when we move to container
const apiUrl = 'http://localhost'
export const addNewRedirect = (redirect) => {
  return (dispatch) => {
    return fetch(`${apiUrl}/shorten`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(redirect),
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          if (data.status === 400) {

          }else if (data.status === 200) {
            dispatch(addNewRedirectRequestSuccess(data))
          }
        })
      }
      else {
        response.json().then(error => {
          dispatch(addNewRedirectRequestFailed(error))
        })
      }
    })
  }
}
export const addNewRedirectRequest = (redirect) => {
  return {
    type: 'ADD_NEW_REDIRECT_REQUEST',
    redirect
  }
}
export const addNewRedirectRequestSuccess = (redirect) => {
  return {
    type: 'ADD_NEW_REDIRECT_REQUEST_SUCCESS',
    redirect
  }
}
export const addNewRedirectRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_REDIRECT_REQUEST_FAILED',
    error
  }
}
export const deleteRedirect = (redirect) => {
  return (dispatch) => {
    return fetch(`${apiUrl}/delete`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(redirect),
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(deleteRedirectRequestSuccess(redirect, data.messge))
        })
      }
      else {
        response.json().then(error => {
          dispatch(deleteRedirectRequestFailed(error))
        })
      }
    })
  }
}

export const deleteRedirectRequestSuccess = (redirect, message) => {
  return {
    type: 'DELETE_REDIRECT_REQUEST_SUCCESS',
    redirect: redirect,
    message: message
  }
}

export const deleteRedirectRequestFailed = (error) => {
  return {
    type: 'DELETE_REDIRECT_REQUEST_SUCCESS',
    error
  }
}

//Async action
export const fetchRedirects = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {
    dispatch(fetchRedirectsRequest())
    // Returns a promise
    return fetch(`${apiUrl}/redirects`)
                .then(response => {
                  if (response.ok) {
                    response.json().then(data => {
                      dispatch(fetchRedirectsSuccess(data.redirects, data.message))
                    })
                  }
                  else {
                    response.json().then(error => {
                      dispatch(fetchRedirectsFailed(error))
                    })
                  }
                })
  }
}
export const fetchRedirectsRequest = () => {
  return {
    type: 'FETCH_REDIRECTS_REQUEST'
  }
}
// Sync action
export const fetchRedirectsSuccess = (redirects,message) => {
  return {
    type: 'FETCH_REDIRECTS_SUCCESS',
    redirects: redirects,
    message: message,
    receivedAt: Date.now
  }
}
export const fetchRedirectsFailed = (error) => {
  return {
    type: 'FETCH_REDIRECTS_FAILED',
    error
  }
}
export const fetchRedirectById = (redirectId) => {
  return (dispatch) => {
    dispatch(fetchRedirectRequest());
      // Returns a promise
      return fetch(apiUrl + redirectId)
             .then(response => {
               if(response.ok){
                 response.json().then(data => {
                   dispatch(fetchRedirectSuccess(data.redirect[0], data.message));
                 })
               }
               else {
                 response.json().then(error => {
                   dispatch(fetchRedirectFailed(error));
                 })
               }
             })
  }
}

export const fetchRedirectRequest = () => {
  return {
    type: 'FETCH_REDIRECT_REQUEST'
  }
}
// Sync action
export const fetchRedirectSuccess = (redirect,message) => {
  return {
    type: 'FETCH_REDIRECT_SUCCESS',
    redirect: redirect,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchRedirectFailed = (error) => {
  return {
    type: 'FETCH_REDIRECT_FAILED',
    error
  }
}