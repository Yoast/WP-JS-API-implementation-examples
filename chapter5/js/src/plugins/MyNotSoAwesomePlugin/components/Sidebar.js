import React, { Fragment } from "react";
import PluginSidebar from "../../../components/PluginSidebar";
import { Slot } from "@wordpress/components";

/**
 * The Sidebar component.
 */
class Sidebar extends React.Component {

	/**
	 * Renders the sidebar.
	 *
	 * @returns {Sidebar} The Sidebar2 component.
	 */
	render() {
		return (
      <Fragment>
        <PluginSidebar name="my-not-so-awesome-plugin-sidebar-2" title="My Not So Awesome Plugin">
          <Slot name="MyNotSoAwesomePluginSidebar" />
        </PluginSidebar>

      </Fragment>
    );
	}
}

export default Sidebar;
