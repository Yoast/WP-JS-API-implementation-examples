export const SET_FORM_TITLE     = 'WPSJS_SET_FORM_TITLE';
export const SET_FORM_SLUG      = 'WPSJS_SET_FORM_SLUG';
export const SET_FORM_CONTENT   = 'WPSJS_SET_FORM_CONTENT';
export const SET_FORM_EXCERPT   = 'WPSJS_SET_FORM_EXCERPT';

export function setFormTitle( title ) {
	return {
		type: SET_FORM_TITLE,
		title,
	};
}

export function setFormSlug( slug ) {
	return {
		type: SET_FORM_SLUG,
		slug,
	};
}

export function setFormContent( content ) {
	return {
		type: SET_FORM_CONTENT,
		content,
	};
}

export function setFormExcerpt( excerpt ) {
	return {
		type: SET_FORM_EXCERPT,
		excerpt,
	};
}
