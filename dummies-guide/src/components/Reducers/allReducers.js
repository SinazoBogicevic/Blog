import searchReducer from "./searchReducer";
import modalReducer from "./modalReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  searchResults: searchReducer,
  openModal: modalReducer,
});

export default allReducers;
