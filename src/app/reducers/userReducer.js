const initalState = {
  id: 1,
  name: 'Anna',
  age: 28,
  hobbies: ['Tennis', 'Cooking'],
  error: null
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      };    
    case 'SET_AGE':
      return {
        ...state,
        age: action.payload
      };      
    case 'FETCH_USER_FULFILLED':
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        age: action.payload.age
      };
    case 'FETCH_USER_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;    
  }
};

export default userReducer;
