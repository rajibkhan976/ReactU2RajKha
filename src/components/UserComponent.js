import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* UserComponent shows the user list and also toggle the text color based on the props it received from the DashboardComponent*/
class UserComponent extends Component {

  constructor (props) {
    super(props);
  }
  //rendering the userlist and toggling the textColor
  render () {
    const users = this.props.users;
    return (
        <ul className="list-group">
          {users.map((user, key) =>
            <Link to={`/user/${user}`} key={key}><li className="list-group-item" style={{color: this.props.textColor}} key={key}>{user}</li></Link>
          )}
            <br/>
            <button type="button" className="btn btn-primary" onClick={this.props.toggleTextColor}>Toggle Colors</button>
        </ul>
    );
  }
}
//defining prop types for the props users
UserComponent.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserComponent;
