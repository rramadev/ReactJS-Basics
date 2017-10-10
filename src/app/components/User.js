import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'

export class User extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      name: '',
      hobbies: [],
      homeLink: props.initialLinkName
    }  
    // binding on constructor
    this.onChangeHomeLink = this.onChangeHomeLink.bind(this);
  }

  onMakeOlder() {
    setTimeout(() => {
      this.setState({
        age: this.state.age + 5
      })
    }, 2000);       
  }

  onChangeHomeLink() {
    this.props.changeHomeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }

  onNavigateHome() {
    browserHistory.push('/home');
  }

  renderHobbies(hobbies) {
    return hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)
  }

  render() {
    let title = ':: I´m a UserDetail component';
    let user = this.props;
    return(
      <div>        
        <p>{title}. My name is {user.name} and i´m {this.state.age} years old. Id: {user.id}</p>
        <p>My hobbies are:</p>
        <ul>
          {this.renderHobbies(this.props.hobbies)}
        </ul>
        <hr/>
        {this.props.children}   
        {/* with Bind(this) */}
        {/*<button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older!</button> */}
        {/* with Arrow function() */}
        <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make me older!</button>
        <button className="btn btn-primary" onClick={this.props.greet}>Greet!</button>
        <hr/>        
        <input type="text" value={this.state.homeLink} 
          onChange={(event) => this.onHandleChange(event)} />
        {/* with binding on constructor */}
        <button className="btn btn-primary" onClick={this.onChangeHomeLink}>Change Link!</button>
        <hr/>
        <button className="btn btn-primary" onClick={this.onNavigateHome}>Go Home</button>
        <Link to={'/user/'+user.id} activeClassName={'active'}> >> User Details</Link>
        <hr/>
      </div>
    );
  }
}

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
  name: PropTypes.string,
  initialAge: PropTypes.number,
  hobbies: PropTypes.array,
  greet: PropTypes.func,
  changeHomeLink: PropTypes.func,
  initialLinkName: PropTypes.string,
  // Set children prop passed from parent component as required
  children: PropTypes.element.isRequired
};