import { SIGN_UP, LOG_IN, LOG_OUT } from "./accountTypes";
import axios from "axios";

export const signUp = (data) => {
  return {
    type: SIGN_UP,
    description: "sign up",
    payload: data,
  };
};

export const logIn = (data) => {
  return {
    type: LOG_IN,
    description: "login",
    payload: data,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
    description: "logout",
  };
};

export const registerUser = (data_user) => {
  return (dispatch) => {
    const data = {
      id: Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1),
      name: data_user.name,
      email: data_user.email,
      token: "asdf123",
      password: data_user.password,
    };
    axios.post("http://localhost:3001/registered_account", data).then((res) => {
      dispatch(signUp(res.data));
    });
  };
};

export const loginUser = (data_user) => {
  return (dispatch) => {
    axios.get("http://localhost:3001/registered_account").then((res) => {
      const isAccountExists = res.data.find(
        (account) =>
          account.email === data_user.email &&
          account.password === data_user.password
      );

      console.log(isAccountExists);
      if (isAccountExists) {
        return dispatch(
          logIn({
            email: isAccountExists.email,
            name: isAccountExists.name,
            token: isAccountExists.token,
          })
        );
      } else {
        return alert("Account not found, please register");
      }
    });
  };
};
