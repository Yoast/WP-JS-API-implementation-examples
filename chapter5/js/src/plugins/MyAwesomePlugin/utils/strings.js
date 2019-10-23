/**
 * Counts the amount of words in the passed text.
 *
 * @param {string} text The text to count the words in.
 *
 * @returns {number} The amount of words.
 */
export function count_words( text ) {
	const words = text.trim().split( " " );

	// Counteracts the empty string being counted as a word.
	if ( words[0] === "" ) {
		return 0;
	}

	return words.length;
}

/**
 * Converts the passed text to a slug-compatible version.
 *
 * @param {string} text The text to convert.
 *
 * @returns {string} The slug-compatible version.
 */
export function to_compatible_slug( text ) {
	return text.trim().replace( /[^a-zA-Z0-9-_/\s]+/g, '' ).replace( /\s+/g, '-' ).toLowerCase();
}
