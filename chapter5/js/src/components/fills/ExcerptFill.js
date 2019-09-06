import React from 'react';
import { compose } from "@wordpress/compose";
import { withSelect } from "@wordpress/data";
import { Fill } from "@wordpress/components";
import { count_words } from "../../utils/strings";

/**
 * The ExcerptFill component.
 */
class ExcerptFill extends React.Component {

	/**
	 * Evaluates the excerpt and returns feedback based on the length of the excerpt.
	 *
	 * @returns {string} The feedback.
	 */
	evaluateExcerpt() {
		const excerptWordCount = count_words( this.props.excerpt );

		if ( excerptWordCount > this.props.contentLength ) {
			return "Your excerpt is longer than the content you've written?!";
		}

		return "";
	}

	/**
	 * Renders the component.
	 *
	 * @returns {ExcerptFill} The component.
	 */
	render() {
		return (
			<Fill name="SidebarSlot">
				<p>{ this.evaluateExcerpt() }</p>
			</Fill>
		);
	}
}

/**
 *  Maps the state to props.
 *
 * @param {Object} state The state to map.
 *
 * @returns {Object} The mapped props.
 */
const mapStateToProps = ( select ) => {
	const store = select( "core/editor" );

	return {
		contentLength: count_words( store.getEditedPostContent() ),
		excerpt: store.getEditedPostAttribute( 'excerpt' ),
	};
}

export default compose( withSelect( mapStateToProps ) )( ExcerptFill );
