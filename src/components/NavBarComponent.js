import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import LoginScreenComponent from './../screens/LoginScreen/LoginScreenComponent';
import DashboardScreenComponent from './../screens/DashboardScreen/DashboardScreenComponent';
import UserScreenComponent from './../screens/UserScreen/UserScreenComponent';

function LoginScreen () {
  return <h2>Login</h2>;
}

function DashboardScreen () {
  return <h2>Dashboard</h2>;
}

function UserScreen () {
  return <h2>User</h2>;
}

class NavBarComponent extends Component {
  render () {
    return (
      <Router>
        <div className="sideBar">
          <nav className="menu">
            <Link to="/">Login</Link> <br/>
            <Link to="/dashboard">Dashboard</Link> <br/>
            <Link to="/user/:name">User</Link> <br/>
          </nav>
            <Route path="/" exact component={LoginScreenComponent} />
            <Route path="/dashboard" component={DashboardScreenComponent} />
            <Route path="/user/:name" component={UserScreenComponent} />
        </div>
      </Router>
    );
  }
}

export default NavBarComponent;
