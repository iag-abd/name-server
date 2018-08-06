import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './App.css'
import RedirectForm from './RedirectForm'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.toggleAddRedirect = this.toggleAddRedirect.bind(this)
    this.addRedirect = this.addRedirect.bind(this)
  }
  toggleAddRedirect (e) {
    e.preventDefault()
    this.props.mappedToggleAddRedirect()
  }
  addRedirect (e) {
    e.preventDefault()
    const form = document.getElementById('addRedirectForm')
    if (form.shortname.value !== ""  && form.longname.value !== "") {
      const data = {
        'shortname': form.shortname.value,
        'longname': form.longname.value,
        'author': form.author.value,
        'team': form.team.value,
      }
      console.log(data)
      this.props.mappedAddRedirect(data)
    }
    else {
      return
    }
  }
  render () {
    const appState = this.props.mappedAppState
    return (
      <div>
        <Navbar inverse  collapseOnSelect className="customNav">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/#">Name Server</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{ pathname: '/', query: {  } }}>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddRedirect}>
                <NavItem eventKey={1}>Add Shortcut</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          {appState.showAddRedirect &&
            <RedirectForm addRedirect={this.addRedirect} />
          }
          { /* Each Smaller Components */}
          {this.props.children}
        </div>
      </div>
    )
  }
}
