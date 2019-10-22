import React from "react";
import { SlotFillProvider } from "@wordpress/components";

/**
 * The PluginContextProvider component.
 */
class PluginContextProvider extends React.Component {

  /**
   * Renders the PluginContextProvider and any passed slots and fills.
   *
   * @returns {SlotFillProvider} The SlotFillProvider.
   */
  render() {
    return (
      <SlotFillProvider>
        { this.props.children }
      </SlotFillProvider>
    );
  }
}

export default PluginContextProvider;
