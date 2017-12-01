const initalState = {
  homeLink: 'Home'
};

const linkReducer = (state = initalState, action) => {
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