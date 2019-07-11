/**
 * Gets the title.
 *
 * @param {Object} state The state to get the title from.
 *
 * @returns {string} The title.
 */
export function getTitle( state ) {
	return state.form.title;
}

/**
 * Gets the slug.
 *
 * @param {Object} state The state to get the slug from.
 *
 * @returns {string} The slug.
 */
export function getSlug( state ) {
	return state.form.slug;
}

/**
 * Gets the content.
 *
 * @param {Object} state The state to get the content from.
 *
 * @returns {string} The content.
 */
export function getContent( state ) {
	return state.form.content;
}

/**
 * Gets the excerpt.
 *
 * @param {Object} state The state to get the excerpt from.
 *
 * @returns {string} The excerpt.
 */
export function getExcerpt( state ) {
	return state.form.excerpt;
}
