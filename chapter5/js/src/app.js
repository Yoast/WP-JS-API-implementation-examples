import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { combineReducers, registerStore } from "@wordpress/data";
import { Slot } from "@wordpress/components";

import editorReducer from "./reducers/core-editor";
import * as editorActions from "./actions/core-editor";
import * as editorSelectors from "./selectors/core-editor";

import { registerPlugin } from "./utils/api";

import Editor from "./components/Editor";
import PluginSidebar from "./components/PluginSidebar";
import Sidebar from "./components/Sidebar";

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
    const MySidebar = () => (
      <Fragment>
        <PluginSidebar name="my-awesome-plugin-sidebar" title="My Awesome Plugin">
          <Slot name="MyAwesomePluginSidebar" />
        </PluginSidebar>

        <Fragment><Sidebar /></Fragment>
      </Fragment>
    );

    const MySidebar2 = () => (
      <Fragment>
        <PluginSidebar name="my-awesome-plugin-sidebar-2" title="My Awesome Plugin 2 without fills">
          <Slot name="MyAwesomePluginSidebar2" />
        </PluginSidebar>

      </Fragment>
    );

    registerPlugin( "My-awesome-plugin", {
      render: MySidebar
    } );

    registerPlugin( "My-awesome-plugin-2", {
      render: MySidebar2
    } );
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
