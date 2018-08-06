import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import appReducer from './appReducer'
import {redirectReducer} from './redirectReducer'

export default combineReducers({
  appState: appReducer,
  redirectState: redirectReducer,
  routing
  // More reducers if there are
  // can go here
})
