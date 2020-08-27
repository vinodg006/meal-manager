import { combineReducers } from "redux";
import auth from "./authReducer";
import error from "./errorReducer";
import item from "./itemReducer";

export default combineReducers({
  auth,
  error,
  item,
});
