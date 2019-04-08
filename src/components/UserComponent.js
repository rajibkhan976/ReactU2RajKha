import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* UserComponent shows the user list and also toggle the text color based on the props it received from the DashboardComponent*/
class UserComponent extends Component {

  constructor (props) {
    super(props);
    this.state = {toggleUserStatus: true};
  }
  //method for toggling user list based on user status
  userStatus = (e) => {
    this.setState({toggleUserStatus: !this.state.toggleUserStatus});
  }

  //rendering the userlist and toggling the textColor
  render () {
    const users = this.props.users;
    return (
        <div>
          <button type="button" className={this.state.toggleUserStatus ? "btn btn-primary btn-block" : "btn btn-dark btn-block"} onClick={this.userStatus}>Show Inactive</button> <br />
          <ul className="list-group">
            {users.map((user) => {
              if (this.state.toggleUserStatus === true) {
                if (user.isActive === true) {
                  return <Link to={`/user/${user.name}`} key={user.id}>
                  <li className="list-group-item" style={{color: this.props.textColor}} key={user.id}>
                  {user.id}. {user.name}
                  <p key={user.id} style={{color: this.props.textColor}}>User is: {user.isActive ? 'Active' : 'Inactive'}</p>
                  </li>
                  </Link>
                }
              } else {
                if (user.isActive === false) {
                  return <Link to={`/user/${user.name}`} key={user.id}>
                  <li className="list-group-item" style={{color: this.props.textColor}} key={user.id}>
                  {user.id}. {user.name}
                  <p key={user.id} style={{color: this.props.textColor}}>User is: {user.isActive ? 'Active' : 'Inactive'}</p>
                  </li>
                  </Link>
                }
              }
            }
            )}
              <br/>
              <button type="button" className="btn btn-info" onClick={this.props.toggleTextColor}>Toggle Colors</button>
          </ul>
        </div>
    );
  }
}
//defining prop types for the props users
UserComponent.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserComponent;
