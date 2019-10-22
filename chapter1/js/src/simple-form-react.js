import React from "react";

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
				<section>
					<label htmlFor="title">Title</label>
					<input type="text" id="title" />
				</section>

				<section>
					<label htmlFor="slug">Slug</label>
					<input type="text" id="slug" />
				</section>

				<section>
					<label htmlFor="content">Content</label>
					<textarea name="content" id="content" cols="60" rows="10"></textarea>
				</section>

				<section>
					<label htmlFor="excerpt">Excerpt</label>
					<textarea name="excerpt" id="excerpt" cols="60" rows="10"></textarea>
				</section>
			</div>
		);
	}
}

export default SimpleForm;
