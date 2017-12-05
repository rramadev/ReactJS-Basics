const initalState = {
  homeLink: 'Home'
};

const linkReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'SET_LINK':
      return  {
        ...state,
        homeLink: action.payload || 'Home'
      };
    default: 
      return state;
  };  
}

export default linkReducer;