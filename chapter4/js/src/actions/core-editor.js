export const EDIT_POST = 'EDIT_POST';
export const UPDATE_BLOCK_ATTRIBUTES = 'UPDATE_BLOCK_ATTRIBUTES';

/**
 * Sets the post title attribute.
 *
 * @param {string} title The title.
 *
 * @returns {{edits: {}, type: string}} The edit post action.
 */
export function setPostTitle( title ) {
	return setPostAttribute( 'title', title );
}

/**
 * Sets the post slug attribute.
 *
 * @param {string} slug The slug.
 *
 * @returns {{edits: {}, type: string}} The edit post action.
 */
export function setPostSlug( slug ) {
	return setPostAttribute( 'slug', slug );
}

/**
 * Sets the post excerpt attribute.
 *
 * @param {string} excerpt The excerpt.
 *
 * @returns {{edits: {}, type: string}} The edit post action.
 */
export function setPostExcerpt( excerpt ) {
	return setPostAttribute( 'excerpt', excerpt );
}

/**
 * Sets the passed post attribute to the passed value.
 *
 * @param {string} attribute The attribute to set.
 * @param {string} value     The value to set the attribute to.
 *
 * @returns {{edits: {}, type: string}} The edit post action.
 */
function setPostAttribute( attribute, value ) {
	return {
		type: EDIT_POST,
		edits: {
			[attribute]: value
		}
	};
}

/**
 * Sets the post's content.
 *
 * @param {string} content The content.
 *
 * @returns {{clientId: string, attributes: {content: *}, type: string}}
 */
export function setPostContent( content ) {
	return {
		type: UPDATE_BLOCK_ATTRIBUTES,
		clientId: 'some-random-block-id',
		attributes: {
			content
		}
	}
}
