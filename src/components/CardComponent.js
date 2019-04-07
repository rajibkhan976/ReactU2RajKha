import React, { Component, Fragment } from 'react';
import styles from './WrapperComponentCSS.module.css';

/* WrapperComponent have two states as showLeftContent and showRightContent along with two methods to control the dispaly of contents
it received from DashboardComponent as props. This class also uses CSSModule for styling the cards*/
class CardComponent extends Component {

  constructor (props) {
    super(props);
    //definition of two states
    this.state = {showLeftContent: true, showRightContent: true};
  }
  // method for controlling the display of left div contents
  toggleLeftContent = (e) => {
    this.setState({showLeftContent: !this.state.showLeftContent});
  }
  // method for controlling the display of right div contents
  toggleRightContent = (e) => {
    this.setState({showRightContent: !this.state.showRightContent});
  }
  //rendering the contents received from DashboardComponent as props and controlling the dispaly based on the state and events
   render () {
       return (
         <Fragment>
          <div className={styles.cardOne}>
            {this.state.showLeftContent ? this.props.left : null}
            <hr/> <br/>
            <button type="button" className="btn btn-info" onClick={this.toggleLeftContent}>Show Content</button>
          </div>
          <div className={styles.cardTwo}>
            {this.state.showRightContent ? this.props.right : null}
            <hr/> <br/>
            <button type="button" className="btn btn-info" onClick={this.toggleRightContent}>Show Content</button>
          </div>
         </Fragment>
       );
     }
   }

export default CardComponent;
