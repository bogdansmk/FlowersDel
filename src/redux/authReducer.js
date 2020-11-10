const initialState = {
  isLoggedIn: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export const login = () => {
  return {
    type: 'LOGIN',
  };
};

export default authReducer;
