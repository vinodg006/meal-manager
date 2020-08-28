import axios from "axios";
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  EDIT_ITEM,
} from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
import apiRoutes from "../common/constants/apiRoutes";

export const getItems = () => (dispatch, getState) => {
  dispatch(setItemsLoading());
  axios
    .get(apiRoutes.ITEM, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addItem = (item) => (dispatch, getState) => {
  axios
    .post(apiRoutes.ITEM, item, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteItem = (id) => (dispatch, getState) => {
  axios
    .delete(`${apiRoutes.ITEM}/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_ITEM,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const editItem = (id, updatedData) => (dispatch, getState) => {
  axios
    .put(`${apiRoutes.ITEM}/${id}`, updatedData, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: EDIT_ITEM,
        payload: { id, updatedData },
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
