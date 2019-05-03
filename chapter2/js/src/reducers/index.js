import { combineReducers } from "redux";
import formReducer from "./formData";

export default combineReducers( {
	form: formReducer,
} );
