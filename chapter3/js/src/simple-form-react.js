import React from "react";
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";

/**
 * Class that creates a simple input form.
 */
class BaseSimpleForm extends React.Component {

	/**
	 * Constructs the base form.
	 *
	 * @param {Object} props The props to be used in the form.
	 */
	constructor( props ) {
		super( props );

		this.onTitleChange   = this.onTitleChange.bind( this );
		this.onSlugChange    = this.onSlugChange.bind( this );
		this.onContentChange = this.onContentChange.bind( this );
		this.onExcerptChange = this.onExcerptChange.bind( this );
	}

	/**
	 * Handles the changing of the title field.
	 *
	 * @param {Object} event The event that took place.
	 *
	 * @returns void
	 */
	onTitleChange( event ) {
		this.props.setFormTitle( event.target.value );
	}

	/**
	 * Handles the changing of the slug field.
	 *
	 * @param {Object} event The event that took place.
	 *
	 * @returns void
	 */
	onSlugChange( event ) {
		this.props.setFormSlug( event.target.value );
	}

	/**
	 * Handles the changing of the content field.
	 *
	 * @param {Object} event The event that took place.
	 *
	 * @returns void
	 */
	onContentChange( event ) {
		this.props.setFormContent( event.target.value );
	}

	/**
	 * Handles the changing of the excerpt field.
	 *
	 * @param {Object} event The event that took place.
	 *
	 * @returns void
	 */
	onExcerptChange( event ) {
		this.props.setFormExcerpt( event.target.value );
	}

	/**
	 * Renders the form.
	 *
	 * @returns {JSX} The rendered form.
	 */
	render() {
		return (
			<div>
				<section>
					<label htmlFor="title">Title</label>
					<input type="text" id="title" value={ this.props.title } onChange={ this.onTitleChange } />
				</section>

				<section>
					<label htmlFor="slug">Slug</label>
					<input type="text" id="slug" value={ this.props.slug } onChange={ this.onSlugChange } />
				</section>

				<section>
					<label htmlFor="content">Content</label>
					<textarea name="content" id="content" cols="60" rows="10" onChange={ this.onContentChange } value={ this.props.content }></textarea>
				</section>

				<section>
					<label htmlFor="excerpt">Excerpt</label>
					<textarea name="excerpt" id="excerpt" cols="60" rows="10" onChange={ this.onExcerptChange } value={ this.props.excerpt }></textarea>
				</section>
			</div>
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
	const store = select( "yoast/api-example" );

	return {
		title:   store.getTitle(),
		slug:    store.getSlug(),
		content: store.getContent(),
		excerpt: store.getExcerpt(),
	};
}

/**
 * Maps actions to be dispatched, to props.
 *
 * @param {function} dispatch The dispatch function.
 *
 * @returns {Object} The dispatch functions mapped to props.
 */
const mapDispatchToProps = ( dispatch ) => {
	const store = dispatch( "yoast/api-example" );

	return {
		setFormTitle:   store.setFormTitle,
		setFormSlug:    store.setFormSlug,
		setFormContent: store.setFormContent,
		setFormExcerpt: store.setFormExcerpt,
	}
}

export default compose( withSelect( mapStateToProps ), withDispatch( mapDispatchToProps ) )( BaseSimpleForm );
