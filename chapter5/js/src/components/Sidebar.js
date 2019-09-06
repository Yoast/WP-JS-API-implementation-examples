import React from "react";
import { Slot, Panel, PanelBody } from "@wordpress/components";

/**
 * The Sidebar component.
 */
class Sidebar extends React.Component {

	/**
	 * Renders the component.
	 *
	 * @returns {Sidebar} The Sidebar component.
	 */
	render() {
		return (
			<aside className="col sidebar">
				<Panel header="Sidebar">
					<PanelBody>
						<Slot name="SidebarSlot" />
					</PanelBody>
				</Panel>
			</aside>
		);
	}
}

export default Sidebar;
