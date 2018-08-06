import { connect } from 'react-redux'
import * as redirectActions from '../actions/redirectActions'
import Redirects from '../components/Redirects'
// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // you can now say this.props.mappedAppSate
    mappedRedirectState: state.redirectState
  }
}
// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // you can now say this.props.mappedAppActions
    mappedFetchRedirects: () => dispatch(redirectActions.fetchRedirects()),
    mappedDeleteRedirect: (redirect) => dispatch(redirectActions.deleteRedirect(redirect))
    // mappedDeleteTodo: todoToDelete => dispatch(redirectActions.deleteTodo(todoToDelete)),
    // mappedEditTodo: todoToEdit => dispatch(redirectActions.editTodo(todoToEdit))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Redirects)