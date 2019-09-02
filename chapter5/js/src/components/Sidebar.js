import React from "react";
import { Slot, Panel, PanelBody } from "@wordpress/components";

class Sidebar extends React.Component {
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
