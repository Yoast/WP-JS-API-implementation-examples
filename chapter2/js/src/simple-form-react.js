import React from 'react';
import { connect } from "react-redux"
import { setFormContent, setFormExcerpt, setFormSlug, setFormTitle } from "./actions/form";

// Barebone without react-redux
//store.getState();
//store.subscribe( () => {} );
//store.dispatch( setFormTitle( "test" ) );

// App.js


/**
 * Class that creates a simple input form.
 */
class BaseSimpleForm extends React.Component {
	constructor( props ) {
		super( props );

		this.onTitleChange   = this.onTitleChange.bind( this );
		this.onSlugChange    = this.onSlugChange.bind( this );
		this.onContentChange = this.onContentChange.bind( this );
		this.onExcerptChange = this.onExcerptChange.bind( this );
	}

	onTitleChange( event ) {
		this.props.setFormTitle( event.target.value );
	}

	onSlugChange( event ) {
		this.props.setFormSlug( event.target.value );
	}

	onContentChange( event ) {
		this.props.setFormContent( event.target.value );
	}

	onExcerptChange( event ) {
		this.props.setFormExcerpt( event.target.value );
	}

	/**
	 * Renders the form.
	 *
	 * @returns {JSX} The Rendered form.
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
					<textarea name="content" id="content" cols="60" rows="10" onChange={ this.onContentChange }>{ this.props.content }</textarea>
				</section>

				<section>
					<label htmlFor="excerpt">Excerpt</label>
					<textarea name="excerpt" id="excerpt" cols="60" rows="10" onChange={ this.onExcerptChange }>{ this.props.excerpt }</textarea>
				</section>
			</div>
		);
	}
}

const mapStateToProps = ( state ) => {
	return {
		title: state.form.title,
		slug: state.form.slug,
		content: state.form.content,
		excerpt: state.form.excerpt,
	};
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		setFormTitle:   ( title ) => dispatch( setFormTitle( title ) ),
		setFormSlug:    ( slug ) => dispatch( setFormSlug( slug ) ),
		setFormContent: ( content ) => dispatch( setFormContent( content ) ),
		setFormExcerpt: ( excerpt ) => dispatch( setFormExcerpt( excerpt ) ),
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( BaseSimpleForm );
