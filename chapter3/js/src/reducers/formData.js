import { SET_FORM_TITLE, SET_FORM_SLUG, SET_FORM_CONTENT, SET_FORM_EXCERPT } from "../actions/form";

const INITIAL_STATE = {
	title:   '',
	slug:    '',
	content: '',
	excerpt: '',
};

/**
 * Reducer for the form data.
 *
 * @param {Object} state  The current state.
 * @param {Object} action The current action.
 *
 * @returns {Object} The new state.
 */
export default function formDataReducer( state = INITIAL_STATE, action ) {
	switch ( action.type ) {
		case SET_FORM_TITLE:
			return {
				...state,
				title: action.title,
			};

		case SET_FORM_SLUG:
			return {
				...state,
				slug: action.slug,
			};

		case SET_FORM_CONTENT:
			return {
				...state,
				content: action.content,
			};

		case SET_FORM_EXCERPT:
			return {
				...state,
				excerpt: action.excerpt,
			};
	}

	return state;
}
