const linkReducer = (state = {
  homeLink: 'Home'
}, action) => {
  switch (action.type) {
    case 'SET_LINK':
      state = {
        homeLink: action.payload
      };
      break;
  };
  return state;
}

export default linkReducer;