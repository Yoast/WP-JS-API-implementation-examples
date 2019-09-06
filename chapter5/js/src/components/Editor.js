import React from "react";
import SimpleForm from "../simple-form-react";
import { SlotFillProvider } from "@wordpress/components";
import Sidebar from "./Sidebar";

import TitleFill from "./fills/TitleFill";
import SlugFill from "./fills/SlugFill";
import ContentFill from "./fills/ContentFill";
import ExcerptFill from "./fills/ExcerptFill";

/**
 * The Editor component.
 */
class Editor extends React.Component {

	/**
	 * Renders the component.
	 *
	 * @returns {Editor} The Editor component.
	 */
	render() {
		return (
			<div className="flex-grid">
				<SlotFillProvider>
					<section className="col main">
						<SimpleForm />
					</section>
					<Sidebar />

					{<TitleFill />}
					{<SlugFill />}
					{<ContentFill />}
					{<ExcerptFill />}
				</SlotFillProvider>
			</div>
		);
	}
}

export default Editor;
