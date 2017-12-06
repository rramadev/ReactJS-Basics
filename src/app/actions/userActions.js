import axios from 'axios';

export const setName = (name) => ({
  type: 'SET_NAME',
  payload: name
});

export const setAge = (age) => ({
  type: 'SET_AGE',
  payload: age
});

const fetchUserFulfilled = (response) => ({
  type: 'FETCH_USER_FULFILLED', 
  payload: response.data
});

const fetchUserError = (error) => ({
  type: 'FETCH_USER_ERROR', 
  payload: error
});

// export const fetchUser = (id) => {
//   let userId = id || '5a02b53f3744ae0100f8184e';
//   return function(dispatch) {
//     axios.get('http://rest.learncode.academy/api/johnbob/friends/'+userId)
//       .then((response) => {
//         dispatch(fetchUserFulfilled(response))
//       })
//       .catch((error) => {
//         dispatch(fetchUserError(error))
//       });
//     };
// };

// export const fetchUser = (id = '5a02b53f3744ae0100f8184e') => 
//   (dispatch) =>
//     axios.get('http://rest.learncode.academy/api/johnbob/friends/'+id)
//       .then(response => dispatch(fetchUserFulfilled(response)))
//       .catch(error => dispatch(fetchUserError(error)));

// Added Promises support to store.dispatch
export const fetchUser = (id = '5a02b53f3744ae0100f8184e') => 
  axios.get('http://rest.learncode.academy/api/johnbob/friends/'+id)
    .then(fetchUserFulfilled)
    .catch(fetchUserError);