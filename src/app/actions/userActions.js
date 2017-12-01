import axios from 'axios';

export function setName(name) {
  return {
    type: 'SET_NAME',
    payload: name
  };
}

export function setAge(age) {
  return {
    type: 'SET_AGE',
    payload: age
  };
}

export function fetchUser(id) {
  let userId = id || '5a02b53f3744ae0100f8184e';
  return function(dispatch) {
    axios.get('http://rest.learncode.academy/api/johnbob/friends/'+userId)
      .then((response) => {
        dispatch({
          type: 'FETCH_USER_FULFILLED', 
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_USER_ERROR',
          payload: err
        })
      });
    };
}