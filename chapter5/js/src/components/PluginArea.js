import React from "react";
import {getPlugins} from "../utils/api";
import PluginContextProvider from "../components/PluginContextProvider";

/**
 * The PluginArea component.
 */
class PluginArea extends React.Component {

  /**
   * Constructs the component.
   *
   * @param {Object} props The props to pass along.
   */
  constructor( props ) {
    super( props );

    this.setPlugins = this.setPlugins.bind( this );
    this.state      = this.getCurrentPluginsState();
  }

  /**
   * Gets the state of all registered plugins.
   *
   * @returns {Object} The registered plugins and their state.
   */
  getCurrentPluginsState() {
    return {
      plugins: Array.map(
        getPlugins(), ( { icon, name, render } ) => {
          return {
            Plugin: render,
            context: { name, icon }
          }
        }
      ),
    }
  }

  /**
   * Sets the plugin's state in the PluginArea's state.
   *
   * @returns {void}
   */
  setPlugins() {
    this.setState( this.getCurrentPluginsState );
  }

  /**
   * Renders the PluginArea and any registered plugin.
   *
   * @returns {PluginArea} The PluginArea.
   */
  render() {
    return (
      <div>
        {
          Array.map( this.state.plugins, ( { context, Plugin } ) => (
            <PluginContextProvider key={ context.name } context={ context }>
              <Plugin />
            </PluginContextProvider>
          ) )
        }
      </div>
    );
  }
}

export default PluginArea;
