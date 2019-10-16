import React, {Fragment} from "react";
import ContentFill from "./fills/ContentFill";

/**
 * The Sidebar component.
 */
class Sidebar extends React.Component {

	/**
	 * Renders the sidebar.
	 *
	 * @returns {Sidebar} The Sidebar component.
	 */
	render() {
		return (
		  <Fragment>
        <ContentFill />
      </Fragment>
		);
	}
}

export default Sidebar;
