import React from 'react'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
const RedirectForm = (props) => {
  return (
    <form className="form form-horizontal" id="addRedirectForm" onSubmit={props.addRedirect}>
      <div className="row">
        <h3 className="centerAlign">Add Your URL Redirect</h3>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>ShortName: </ControlLabel>
            <FormControl
              type="text" placeholder="google"
              name="shortname"
               />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>URL: </ControlLabel>
            <FormControl
              type="text" placeholder="https://www.google.com.au"
              name="longname"
               />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Author: </ControlLabel>
            <FormControl
              type="text" placeholder="Your Name"
              name="author"
               />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Team: </ControlLabel>
            <FormControl
              componentClass="textarea" placeholder="Macgyver"
              name="team"
              />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
      </FormGroup>
    </form>
  )
}
export default RedirectForm
