import React from 'react';
import { compose } from "@wordpress/compose";
import { withSelect } from "@wordpress/data";
import { Fill } from "@wordpress/components";
import { to_compatible_slug } from "../../utils/strings";

/**
 * The SlugFill component.
 */
class SlugFill extends React.Component {

	/**
	 * Evaluates the title and returns feedback based on the length of the title.
	 *
	 * @returns {string} The feedback.
	 */
	evaluateSlug() {
		const slug = this.props.slug;

		if ( slug.length === 0 ) {
			return this.handleEmptySlug();
		}

		// Check if only valid characters exist in the slug.
		if ( slug.match( /^[a-zA-Z0-9-_]*$/ ) === null ) {
			return "You have some invalid characters in your slug. Please remove them."
		}

		if ( slug.length > 50 ) {
			return "Your slug is too long.";
		}

		return "Awesome slug!";
	}

	/**
	 * Handles empty slugs.
	 *
	 * @returns {string} The message to display.
	 */
	handleEmptySlug() {
		const message = "You haven't added a slug. Please add one.";

		if ( this.props.suggestedSlug.length !== 0 ) {
			return `${message} 
			Suggestion: ${ this.props.suggestedSlug }`;
		}

		return message;
	}

	/**
	 * Renders the component.
	 *
	 * @returns {SlugFill} The component.
	 */
	render() {
		return (
			<Fill name="SidebarSlot">
				<p>{ this.evaluateSlug() }</p>
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
		suggestedSlug: to_compatible_slug( store.getEditedPostAttribute( 'title' ) ),
		slug:   store.getEditedPostAttribute( 'slug' ),
	};
}

export default compose( withSelect( mapStateToProps ) )( SlugFill );
