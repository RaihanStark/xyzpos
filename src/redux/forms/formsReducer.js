import {
  ADD_NAME,
  ADD_EMAIL,
  ADD_PASSWORD,
  ADD_REMEMBER_ME,
} from "./formsTypes";

const initialState = {
  name: "",
  email: "",
  password: "",
  rememberMe: false,
};

const formsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return { ...state, name: action.payload };
    case ADD_EMAIL:
      return { ...state, email: action.payload };
    case ADD_PASSWORD:
      return { ...state, password: action.payload };
    case ADD_REMEMBER_ME:
      return { ...state, rememberMe: action.payload };
    default:
      return state;
  }
};

export default formsReducer;
