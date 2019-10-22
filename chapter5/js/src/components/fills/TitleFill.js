import React from "react";
import { compose } from "@wordpress/compose";
import { withSelect } from "@wordpress/data";
import { Fill } from "@wordpress/components";
import { count_words } from "../../utils/strings";

/**
 * The TitleFill component.
 */
class TitleFill extends React.Component {

	/**
	 * Evaluates the title and returns feedback based on the length of the title.
	 *
	 * @returns {string} The feedback.
	 */
	evaluateTitle() {
		const title     = this.props.title;
		const wordCount = count_words( title );

		if ( wordCount === 0 ) {
			return "You haven't added a title. Please add one.";
		}

		if ( wordCount > 10 ) {
			return "Your title is too long.";
		}

		return "Awesome title!";
	}

	/**
	 * Renders the component.
	 *
	 * @returns {TitleFill} The component.
	 */
	render() {
		return (
			<Fill name="SidebarSlot">
				<p>{ this.evaluateTitle() }</p>
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
		title:   store.getEditedPostAttribute( 'title' ),
	};
}

export default compose( withSelect( mapStateToProps ) )( TitleFill );
