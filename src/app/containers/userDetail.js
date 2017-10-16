import React from 'react';
import { connect } from 'react-redux';

import { UserDetail } from '../components/UserDetail';
import { fetchUser } from '../actions/userActions';

const mapStateToProps = (state) => {
  return {
    user: state.user    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => {
      dispatch(fetchUser(id));
    }
  };
};

const UserDetailContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(UserDetail);

export default UserDetailContainer;