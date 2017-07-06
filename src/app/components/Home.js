import React from 'react';

export class Home extends React.Component {
  render() {
    let title = ':: I´m a Home component';
    let user = this.props;
    return(
      <div>
        <p>{title}. My name is {user.name} and i´m {user.age} years old.</p>
        <p>My hobbies are:</p>
        <ul>
          {this.props.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
        </ul>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  hobbies: React.PropTypes.array
};