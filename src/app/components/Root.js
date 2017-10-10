import React from 'react';

import { Header } from './Header';

export class Root extends React.Component {
  constructor(props) {
    super();
    this.state = {
      homeLink: 'Home'
    };
  }

  onChangeHomeLink(newName) {
    this.setState({
      homeLink: newName
    })
  }

  render() {
    const homeLinkAsExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        initialLinkName: this.state.homeLink,
        changeHomeLink: this.onChangeHomeLink.bind(this)
      });
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>        
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">          
            {homeLinkAsExtraProp}
          </div>        
        </div>
      </div>
    );
  }
}