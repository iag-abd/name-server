import React from 'react'
import {  Button, Glyphicon, ControlLabel, Form, FormGroup, FormControl } from 'react-bootstrap'
// import { Link } from 'react-router'
export default class Todos extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.deleteRedirect = this.deleteRedirect.bind(this)
    this.state = {
      search: ''
    }
  }
  componentWillMount () {
    this.props.mappedFetchRedirects()
  }
  handleSearchChange (e) {
    this.setState({ search: e.target.value });
  }
  deleteRedirect (redirect) {
    this.props.mappedDeleteRedirect(redirect)
  }
  showEditModal (bookToEdit) {
    // this.props.mappedshowEditModal(redirectToEdit);
  }
  hideEditModal () {
    // this.props.mappedhideEditModal();
  }
  hideDeleteModal () {
    // this.props.mappedhideDeleteModal();
  }
  showDeleteModal (redirectToDelete) {
    // this.props.mappedshowDeleteModal(redirectToDelete);
  }
  render () {
    const redirectState = this.props.mappedRedirectState
    const redirects = redirectState.redirects
    const filteredRedirects = redirects.filter(redirect => {
      return redirect.shortname.indexOf(this.state.search) !== -1
    })
    return (
      <div className="col-md-12">
        <h3 className="centerAlign">Shortcuts</h3>
        {!redirects && redirectState.isFetching &&
          <p>Loading shortcuts....</p>
        }
        {redirects.length <= 0 && !redirectState.isFetching &&
          <p>No Shortcut Available. Add A Shortcut to List here.</p>
        }
        <Form inline>
          <FormGroup controlId="formInlineName">
          <ControlLabel>Search:</ControlLabel>{' '}
            <FormControl type="text" placeholder="" value={this.state.search} onChange={this.handleSearchChange} />
          </FormGroup>
        </Form>
        {redirects && redirects.length > 0 && !redirectState.isFetching &&
        <table className="table booksTable">
          <thead>
           <tr><th>Shortcut</th><th className="textCenter">URL</th><th className="textCenter">Author</th><th className="textCenter">Team</th></tr>
          </thead>
          <tbody>
            {filteredRedirects.map((redirect,i) => <tr key={i}>
              <td><a href={redirect.longname}>{redirect.shortname}</a></td>
              <td>{redirect.longname}</td>
              <td>{redirect.author}</td>
              <td>{redirect.team}</td>
              {/* <td className="textCenter"><Button onClick={() => this.showEditModal(redirect)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td> */}
              <td className="textCenter"><Button onClick={() => this.deleteRedirect(redirect)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
            </tr>)
            }
          </tbody>
        </table>
        }
      </div>
    )
  }
}
