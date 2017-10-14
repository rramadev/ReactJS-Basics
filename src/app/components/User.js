import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'

export const User = (props) => {
 
  // onMakeOlder() {
  //   setTimeout(() => {
  //     this.setState({
  //       age: this.state.age + 5
  //     })
  //   }, 2000);       
  // }

  // onChangeHomeLink() {
  //   this.props.changeHomeLink(this.state.homeLink);
  // }

  // onHandleChange(event) {
  //   this.setState({
  //     homeLink: event.target.value
  //   });
  // }

  // onNavigateHome() {
  //   browserHistory.push('/home');
  // }

  // renderHobbies(hobbies) {
  //   return hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)
  // }
  
  return(
    <div>        
      <p>Hi!. My name is {props.user.name} and i´m {props.user.age} years old. Id: {props.user.id}</p>
      <p>My hobbies are:</p>
      <ul>
        {props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
      </ul>
      <hr/>  
      {/* with Bind(this) */}
      {/*<button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older!</button> */}
      {/* with Arrow function() */}
      {/* <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make me older!</button>
      <button className="btn btn-primary" onClick={this.props.greet}>Greet!</button>*/}
      <p>Set the name of the Menu link:</p>
      <hr/>        
      <input type="text" value={props.link.homeLink} 
        onChange={(event) => props.changeHomeLink(event.target.value)} /> 
      {/* with binding on constructor */}
      {/* <button className="btn btn-primary" onClick={this.onChangeHomeLink}>Change Link!</button>
      <hr/>
      <button className="btn btn-primary" onClick={this.onNavigateHome}>Go Home</button>
      <Link to={'/user/'+user.id} activeClassName={'active'}> >> User Details</Link>
      <hr/> */}
    </div>
  ); 
};

// Specify the types of the props passed to the component
// User.propTypes = {
//   name: React.PropTypes.string,
//   initialAge: React.PropTypes.number,
//   hobbies: React.PropTypes.array,
//   greet: React.PropTypes.func,
//   changeHomeLink: React.PropTypes.func,
//   initialLinkName: React.PropTypes.string
// };

// Updated to version 15.* using prop-types package
User.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.array,  
  changeHomeLink: PropTypes.func  
};