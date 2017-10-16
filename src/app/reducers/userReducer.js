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
      state = {
        ...state,
        name: action.payload
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload
      };
      break;
    case 'FETCH_USER_FULFILLED':
      state = {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        age: action.payload.age
      }
      break;
    case 'FETCH_USER_ERROR':
      state = {
        ...state,
        error: action.payload
      }
      break;    
  }
  return state;
};

export default userReducer;
