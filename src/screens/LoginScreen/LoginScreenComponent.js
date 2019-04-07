import React, { Component } from 'react';
import styles from '../../components/WrapperComponentCSS.module.css';

class LoginScreenComponent extends Component {

  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className={styles.cardTwo}>
        <div className="jumbotron">
          <input className="form-control" type="text" onChange={this.handleInput}/> <br/>
          <button type="button" className="btn btn-success" onClick={this.logIn}>Login</button>
        </div>
        <button type="button" className="btn btn-info" onClick={this.logIn}>Show Info</button>
      </div>
    );
  }
}

export default LoginScreenComponent;
