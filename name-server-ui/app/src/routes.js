import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Redirects from './containers/Redirects'
// import Redirect from './containers/Redirect'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Redirects} />
    {/* <Route path='/:id' component={Redirect} /> */}
  </Route>
)
