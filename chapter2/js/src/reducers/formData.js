import {SET_FORM_TITLE, SET_FORM_SLUG, SET_FORM_CONTENT, SET_FORM_EXCERPT} from "../actions/form";

const INITIAL_STATE = {
	title:   '',
	slug:    '',
	content: '',
	excerpt: '',
};

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
				slug: action.content,
			};

		case SET_FORM_EXCERPT:
			return {
				...state,
				slug: action.excerpt,
			};
	}

	return state;
}
