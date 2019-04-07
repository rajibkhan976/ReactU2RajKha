import React, { Component } from 'react';
import styles from '../../components/WrapperComponentCSS.module.css';

class UserScreenComponent extends Component {
 constructor (props) {
   super (props);
 }

 render () {
   let userName = this.props.match.params.id;
   return (
     <div className={styles.cardOne}>
      <h4>Selected user: <span>{(userName === undefined) ? "No user selected!" : userName}</span> </h4>
     </div>
   );
 }
}

export default UserScreenComponent;
