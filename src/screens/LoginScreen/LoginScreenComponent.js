import React, { Component } from 'react';
import styles from '../../components/WrapperComponentCSS.module.css';
import { Redirect } from 'react-router-dom'

class LoginScreenComponent extends Component {

  constructor (props) {
    super (props);
    this.state = {loginStatus: false, errorMessage: ''};
  }

  handleLoginCredential = (e) => {
    this.loginCredential = e.target.value;
    console.log(typeof this.loginCredential);
  }

  logInChecker = (e) => {
    if (this.loginCredential === undefined) {
      this.setState({loginStatus: false});
    } else {
      this.setState({loginStatus: true});
    }
  }

  errorHandler = (e) => {
    if (!this.state.loginStatus) {
      this.setState({errorMessage: 'You need to click on the button to login:)'});
    } else {
      this.setState({errorMessage: ''});
    }
  }

  render () {
    if (this.state.loginStatus) {
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
