import React, { Fragment } from "react";
import ContentFill from "./fills/ContentFill";
import PluginSidebar from "../../../components/PluginSidebar";
import { Slot } from "@wordpress/components";

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
        <PluginSidebar name="my-awesome-plugin-sidebar" title="My Awesome Plugin">
          <Slot name="MyAwesomePluginSidebar" />
        </PluginSidebar>

        <ContentFill />
      </Fragment>
    );
	}
}

export default Sidebar;
