import React from "react";
import ReactDOM from "react-dom";

import { combineReducers, registerStore } from "@wordpress/data";

import editorReducer from "./reducers/core-editor";
import * as editorActions from "./actions/core-editor";
import * as editorSelectors from "./selectors/core-editor";

import Editor from "./components/Editor";

import MyAwesomePlugin from "./plugins/MyAwesomePlugin/MyAwesomePlugin";
import MyNotSoAwesomePlugin from "./plugins/MyNotSoAwesomePlugin/MyNotSoAwesomePlugin";

registerStore( "core/editor", {
	reducer: combineReducers( { editor: editorReducer } ),
	selectors: editorSelectors,
	actions: editorActions,
} );

/**
 * The App component.
 */
class App extends React.Component {

  /**
   * Constructs the component.
   *
   * @param {Object} props The props to pass along.
   */
  constructor( props ) {
    super( props );

    this.init();
  }

  /**
   * Registers the plugins to be used in the application.
   *
   * @returns {void}
   */
  init() {
    new MyAwesomePlugin();
    new MyNotSoAwesomePlugin();
  }

  /**
   * Renders the editor.
   *
   * @returns {Editor} The editor.
   */
	render() {
		return ( <Editor /> );
	}
}

ReactDOM.render( <App/>, document.getElementById( "root" ) );
