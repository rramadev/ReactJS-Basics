import React from 'react';
import { connect } from 'react-redux';

import { Header } from '../components/Header';

const mapStateToProps = (state, { newP }) => {
  return {
    link: state.link,
    newP
  };
};

const HeaderContainer = connect(
  mapStateToProps
)(Header);

export default HeaderContainer;