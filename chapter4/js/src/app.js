import React from "react";
import ReactDOM from "react-dom";

import editorReducer from "./reducers/core-editor";
import * as editorActions from "./actions/core-editor";
import * as editorSelectors from "./selectors/core-editor";

import SimpleForm from "./simple-form-react";
import {combineReducers, registerStore} from "@wordpress/data";

registerStore( "core/editor", {
	reducer: combineReducers( { editor: editorReducer } ),
	selectors: editorSelectors,
	actions: editorActions,
} );

class App extends React.Component {
	render() {
		return ( <SimpleForm /> );
	}
}

ReactDOM.render( <App/>, document.getElementById( "root" ) );
