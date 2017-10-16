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
    fetchUser: () => {
      dispatch(fetchUser());
    }
  };
};

const UserDetailContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(UserDetail);

export default UserDetailContainer;