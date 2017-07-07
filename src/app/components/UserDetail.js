import React from 'react';
import { browserHistory } from 'react-router'

export class UserDetail extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      name: '',
      hobbies: [],
      homeLink: props.initialLinkName
    }  
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 5
    });    
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

  render() {
    let title = ':: I´m a UserDetail component';
    let user = this.props;
    return(
      <div>
        <p>{title}. My name is {user.name} and i´m {this.state.age} years old.</p>
        <p>My hobbies are:</p>
        <ul>
          {this.props.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
        </ul>
        <hr/>
        {this.props.children}   
        {/*<button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older!</button> */}
        <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Make me older!</button>
        <button className="btn btn-primary" onClick={this.props.greet}>Greet!</button>
        <hr/>
        <input type="text" value={this.state.homeLink} 
          onChange={(event) => this.onHandleChange(event)} />
        <button className="btn btn-primary" onClick={this.onChangeHomeLink.bind(this)}>Change Link!</button>
        <hr/>
        <button className="btn btn-primary" onClick={this.onNavigateHome}>Go Home</button>
        <hr/>
      </div>
    );
  }
}

// Specify the types of the props passed to the component
UserDetail.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  hobbies: React.PropTypes.array,
  greet: React.PropTypes.func,
  changeHomeLink: React.PropTypes.func,
  initialLinkName: React.PropTypes.string
};