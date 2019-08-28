export const SET_FORM_TITLE     = 'WPSJS_SET_FORM_TITLE';
export const SET_FORM_SLUG      = 'WPSJS_SET_FORM_SLUG';
export const SET_FORM_CONTENT   = 'WPSJS_SET_FORM_CONTENT';
export const SET_FORM_EXCERPT   = 'WPSJS_SET_FORM_EXCERPT';

/**
 * Sets the form title.
 *
 * @param {string} title The title to set.
 *
 * @returns {Object} The action.
 */
export function setFormTitle( title ) {
	return {
		type: SET_FORM_TITLE,
		title,
	};
}

/**
 * Sets the form slug.
 *
 * @param {string} slug The slug to set.
 *
 * @returns {Object} The action.
 */
export function setFormSlug( slug ) {
	return {
		type: SET_FORM_SLUG,
		slug,
	};
}

/**
 * Sets the form content.
 *
 * @param {string} content The content to set.
 *
 * @returns {Object} The action.
 */
export function setFormContent( content ) {
	return {
		type: SET_FORM_CONTENT,
		content,
	};
}

/**
 * Sets the form excerpt.
 *
 * @param {string} excerpt The excerpt to set.
 *
 * @returns {Object} The action.
 */
export function setFormExcerpt( excerpt ) {
	return {
		type: SET_FORM_EXCERPT,
		excerpt,
	};
}
