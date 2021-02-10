import { SET_CURRENT_USER } from "../actionTypes";

const initialState = {
  cuurentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

// Selector
export const getCurrentUser = (state) => state.currentUser;
