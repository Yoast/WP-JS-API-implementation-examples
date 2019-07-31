/**
 * Gets the edited post attribute by it's name.
 *
 * @param {Object} state     The state.
 * @param {string} attribute The attribute to retrieve.
 *
 * @returns {string} The attributes value or an empty string if it doesn't exist.
 */
export function getEditedPostAttribute( state, attribute ) {
	switch( attribute ) {
		case 'title':
			return state.editor.present.edits.title || '';

		case 'slug':
			return state.editor.present.edits.slug || '';

		case 'excerpt':
			return state.editor.present.edits.excerpt || '';

		case 'content':
			return getEditedPostContent( state ) || '';

		default:
			return '';
	}
}

/**
 * Gets the edited post content.
 *
 * @param {Object} state The state.
 *
 * @returns {string} The edited post content.
 */
export function getEditedPostContent( state ) {
	const client = state.editor.present.blocks.byClientId || '';

	if ( client === '' ) {
		return client;
	}

	return client['some-random-block-id'].attributes.content;
}
