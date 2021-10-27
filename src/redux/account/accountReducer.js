import { SIGN_UP, LOG_IN, LOG_OUT } from "./accountTypes";

const initialState = {
  isLoggedIn: false,
  email: "",
  name: "",
  token: "",
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
        name: action.payload.name,
        token: action.payload.token,
      };
    case SIGN_UP:
      return {
        isLoggedIn: true,
        email: action.payload.email,
        name: action.payload.name,
        token: action.payload.token,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        email: "",
        name: "",
        token: "",
      };
    default:
      return state;
  }
};

export default accountReducer;
