import React from "react";
import { compose } from "@wordpress/compose";
import { withSelect } from "@wordpress/data";
import { Fill } from "@wordpress/components";
import { count_words } from "../../utils/strings";

/**
 * The ContentFill component.
 */
class ContentFill extends React.Component {

	/**
	 * Evaluates the content and returns feedback based on the length of the content.
	 *
	 * @returns {string} The feedback.
	 */
	evaluateContent() {
		const content   = this.props.content;
		const wordCount = count_words( content );

		if ( wordCount === 0 ) {
			return "You haven't added any content. Please add some.";
		}

		return `Total words: ${wordCount}`;
	}

	/**
	 * Renders the component.
	 *
	 * @returns {ContentFill} The component.
	 */
	render() {
		return (
			<Fill name="SidebarSlot">
				<p>{ this.evaluateContent() }</p>
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
		content:   store.getEditedPostContent(),
	};
}

export default compose( withSelect( mapStateToProps ) )( ContentFill );
