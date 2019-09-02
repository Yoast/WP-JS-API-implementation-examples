import React from "react";
import SimpleForm from "../simple-form-react";
import { SlotFillProvider } from "@wordpress/components";
import Sidebar from "./Sidebar";
import ExampleFill from "./ExampleFill";

class Editor extends React.Component {
	render() {
		return (
			<div className="flex-grid">
				<SlotFillProvider>
					<section className="col main">
						<SimpleForm />
					</section>
					<Sidebar />

					{ExampleFill()}
					{ExampleFill()}
					{ExampleFill()}
					{ExampleFill()}
				</SlotFillProvider>
			</div>
		);
	}
}

export default Editor;
