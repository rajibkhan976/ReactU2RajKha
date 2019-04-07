import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import LoginScreenComponent from './../screens/LoginScreen/LoginScreenComponent';
import DashboardScreenComponent from './../screens/DashboardScreen/DashboardScreenComponent';
import UserScreenComponent from './../screens/UserScreen/UserScreenComponent';

class NavBarComponent extends Component {
  render () {
    return (
      <Router>
        <div className="sideBar">
          <nav className="menu">
            <Link to="/">Login</Link> <br/>
            <Link to="/dashboard">Dashboard</Link> <br/>
            <Link to="/user">User</Link> <br/>
          </nav>
            <Route path="/" exact component={LoginScreenComponent} />
            <Route path="/dashboard" component={DashboardScreenComponent} />
            <Switch>
              <Route path="/user/:id" component={UserScreenComponent} />
              <Route path="/user" component={UserScreenComponent} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default NavBarComponent;
