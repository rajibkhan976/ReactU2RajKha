import React, { Component } from 'react';
import styles from '../../components/WrapperComponentCSS.module.css';
import { Redirect } from 'react-router-dom'

/* This class handles the login functionalities*/
class LoginScreenComponent extends Component {

  constructor (props) {
    super (props);
    //definition of login status and error message
    this.state = {showInfo: false, errorMessage: ''};
  }
  //method for hadling login input
  handleLoginCredential = (e) => {
    this.loginCredential = e.target.value;
  }
  //method for checking login status
  logInChecker = (e) => {
    if (this.loginCredential === undefined) {
      this.setState({showInfo: false});
    } else {
      this.setState({showInfo: true});
    }
  }
  //method for setting error message
  errorHandler = (e) => {
    if (!this.state.showInfo) {
      this.setState({errorMessage: 'You need to click on the button to login:)'});
    } else {
      this.setState({errorMessage: ''});
    }
  }
 //rendering the login form or the dashboard component in case login status is true
  render () {
    if (this.state.showInfo) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className={styles.cardTwo}>
        <div className="jumbotron">
          <input className="form-control" type="text" onChange={this.handleLoginCredential}/> <br/>
          <button type="button" className="btn btn-success" onClick={this.logInChecker}>Login</button>
        </div>
        <p>{this.state.errorMessage}</p>
        <button type="button" className="btn btn-info" onClick={this.errorHandler}>Show Info</button>
      </div>
    );
  }
}

export default LoginScreenComponent;
