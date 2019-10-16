import React from "react";
import SimpleForm from "./simple-form-react";
import PluginArea from "../utils/plugin-area";

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
        <section className="col main">
          <SimpleForm />
        </section>
        <aside className="col sidebar">
          <PluginArea />
        </aside>
			</div>
		);
	}
}

export default Editor;
