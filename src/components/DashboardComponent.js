import React, { Component } from 'react';
import UserComponent from './UserComponent';
import CardComponent from './CardComponent';

/* DashboardComponent has two states, such as users and color. It has methods to add and remove users and to change the text Color
of user name. Finally this class sends the UserComponent and the input fields along with two buttons as props to WrapperComponent.
At the same time users and color state and toggleColor method is also send as props to the UserComponent*/
class DashboardComponent extends Component {

  constructor (props) {
    super(props);
    //definition of users and color state
    this.state = {users: [
      'Pelle','Kalle'
    ],
    color: 'blue'
    };
  }
  //handling the value of input field
  handleInput = (e) => {
    this.username = e.target.value;
  }
  //method for adding users
  addUser = (e) => {
    this.setState(prevState => ({users: [...prevState.users, this.username]}));
  }
  //method for removing user
  removeUser = (e) => {
    this.setState(prevState => prevState.users.pop());
  }
  //method for toggling text color of user list
  toggleColor = (e) => {
    this.setState({color: (this.state.color === 'blue') ? 'red' : 'blue'});
  }
  /*rendering the Usercomponent along with input field and two buttons to WrapperComponent as props and sending the state users,
  color and toggleColor method as props to UserComponent */
  render () {
    return (
      <CardComponent
      left={<UserComponent users={this.state.users} textColor={this.state.color} toggleTextColor={this.toggleColor}/>}
      right={(
        <div>
          <input className="form-control" type="text" onChange={this.handleInput}/> <br/>
          <button type="button" className="btn btn-success btn-block" onClick={this.addUser}>Add</button>  <br/>
          <button type="button" className="btn btn-danger btn-block" onClick={this.removeUser}>Remove</button>
        </div>
      )}>
      </CardComponent>
    );
  }
}

export default DashboardComponent;
