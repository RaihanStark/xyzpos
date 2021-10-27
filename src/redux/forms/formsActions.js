import {
  ADD_NAME,
  ADD_EMAIL,
  ADD_PASSWORD,
  ADD_REMEMBER_ME,
} from "./formsTypes";

export const addName = (name) => {
  return {
    type: ADD_NAME,
    description: "Adding name to forms",
    payload: name,
  };
};

export const addEmail = (email) => {
  return {
    type: ADD_EMAIL,
    description: "Adding email to forms",
    payload: email,
  };
};

export const addPassword = (password) => {
  return {
    type: ADD_PASSWORD,
    description: "Adding password to forms",
    payload: password,
  };
};

export const addRememberMe = (rememberMe) => {
  return {
    type: ADD_REMEMBER_ME,
    description: "Adding rememberMe to forms",
    payload: rememberMe,
  };
};
