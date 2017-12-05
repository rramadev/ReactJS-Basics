import React from 'react';
import { connect } from 'react-redux';

import { UserDetail } from '../components/UserDetail';
import { fetchUser } from '../actions/userActions';

const mapStateToProps = (state) => {
  return {
    user: state.user    
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFetchUser(id) {
//       dispatch(fetchUser(id));
//     }
//   };
// };

// Shorthand notation, when the arguments of props and action to dispatch match
const mapDispatchToProps = {
  onFetchUser: fetchUser  
};

const UserDetailContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(UserDetail);

export default UserDetailContainer;