import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Class that creates a simple input form.
 */
class SimpleForm extends React.Component {
	/**
	 * Renders the form.
	 *
	 * @returns {JSX} The Rendered form.
	 */
	render() {
		return (
			<div>
				<label htmlFor="title">Title</label><br/>
				<input type="text" id="title" /><br/>

				<label htmlFor="slug">Slug</label><br/>
				<input type="text" id="slug" /><br/>

				<label htmlFor="content">Content</label><br/>
				<textarea name="content" id="content" cols="60" rows="10"></textarea><br/>

				<label htmlFor="excerpt">Excerpt</label><br/>
				<textarea name="excerpt" id="excerpt" cols="60" rows="10"></textarea><br/>
			</div>
		);
	}
}

ReactDOM.render( <SimpleForm/>, document.getElementById( "root" ) );
