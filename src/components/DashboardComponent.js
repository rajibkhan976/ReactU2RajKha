import React, { Component, Fragment } from 'react';
import UserComponent from './UserComponent';
import CardComponent from './CardComponent';
import styles from './WrapperComponentCSS.module.css';

/* DashboardComponent has two states, such as users and color. It has methods to add and remove users and to change the text Color
of user name. Finally this class sends the UserComponent and the input fields along with two buttons as props to WrapperComponent.
At the same time users and color state and toggleColor method is also send as props to the UserComponent*/
class DashboardComponent extends Component {

  constructor (props) {
    super(props);
    //definition of users and color state
    this.state = {users: [
      {id: 1, name: 'Mimmi', isActive: true},
      {id: 2, name: 'Kalle', isActive: false},
      {id: 3, name: 'Klara', isActive: true},
      {id: 4, name: 'John', isActive: true},
      {id: 5, name: 'Stina', isActive: false}
    ],
    color: 'blue'
    };
  }
  //handling the value of input field
  handleInput = (e) => {
    this.userName = e.target.value;
    this.userId = 5;
  }
  //method for adding users
  addUser = (e) => {
    this.userId++;
    this.setState(prevState => ({users: [...prevState.users, {id: this.userId, name: this.userName, isActive: true}]}));
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
        left={<UserComponent users={this.state.users}
        textColor={this.state.color}
        toggleTextColor={this.toggleColor}/>}>
          <input className="form-control" type="text" onChange= {this.handleInput}/> <br/>
          <button type="button" className="btn btn-success btn-block" onClick= {this.addUser}>Add</button>  <br/>
          <button type="button" className="btn btn-danger btn-block" onClick= {this.removeUser}>Remove</button>
        </CardComponent>
    );
  }
}

export default DashboardComponent;
