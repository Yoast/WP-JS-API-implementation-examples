import { combineReducers } from "@wordpress/data";
import formReducer from "./formData";

/**
 * Combines all reducers into a single one.
 */
export default combineReducers( {
	form: formReducer,
} );
