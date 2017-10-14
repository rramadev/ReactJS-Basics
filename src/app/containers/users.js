import React from 'react';
import { connect } from 'react-redux';

import { UserList } from '../components/UserList';
import { setName, setAge } from '../actions/userActions';
import { setLink } from '../actions/linkActions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    link: state.link
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    },
    setAge: (age) => {
      dispatch(setAge(age));
    },
    setLink: (link) => {
      dispatch(setLink(link));
    }
  }
};

const UsersContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(UserList);

export default UsersContainer;