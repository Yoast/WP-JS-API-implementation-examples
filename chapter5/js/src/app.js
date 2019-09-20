import React from "react";
import ReactDOM from "react-dom";

import editorReducer from "./reducers/core-editor";
import * as editorActions from "./actions/core-editor";
import * as editorSelectors from "./selectors/core-editor";

import Editor from "./components/Editor";
import {combineReducers, registerStore} from "@wordpress/data";

registerStore( "core/editor", {
	reducer: combineReducers( { editor: editorReducer } ),
	selectors: editorSelectors,
	actions: editorActions,
} );

class App extends React.Component {
	render() {
		return ( <Editor /> );
	}
}

ReactDOM.render( <App/>, document.getElementById( "root" ) );
