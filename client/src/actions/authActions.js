import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./types";
import axios from "axios";
import { returnErrors } from "./errorActions";
import apiRoutes from "../common/constants/apiRoutes";

//Check token and load user

export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });

  axios
    .get(apiRoutes.USER_DETAILS, tokenConfig(getState))
    .then((res) => dispatch({ type: USER_LOADED, payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

//Register User
export const register = ({ name, email, password }) => (dispatch) => {
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Request body
  const body = JSON.stringify({ name, email, password });

  axios
    .post(apiRoutes.REGISTER, body, config)
    .then((res) => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

//Login User
export const login = ({ email, password }) => (dispatch) => {
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Request body
  const body = JSON.stringify({ email, password });

  axios
    .post(apiRoutes.LOGIN, body, config)
    .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

//Logout user
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

//Setup config headers and token
export const tokenConfig = (getState) => {
  //Get  token from localStorage.
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //If token add to header
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
