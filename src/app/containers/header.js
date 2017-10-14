import React from 'react';
import { connect } from 'react-redux';

import { Header } from '../components/Header';

const mapStateToProps = (state) => {
  return {
    link: state.link
  };
};

const HeaderContainer = connect(
  mapStateToProps
)(Header);

export default HeaderContainer;