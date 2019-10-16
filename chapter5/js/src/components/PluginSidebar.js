import React from "react";

/**
 * The PluginSideBar component.
 */
class PluginSidebar extends React.Component {

  /**
   * Renders the PluginSidebar.
   *
   * @returns {PluginSidebar} The PluginSidebar.
   */
  render() {
    return (
      <div>
        <div className="plugin-sidebar-header"><strong>{this.props.title || 'Untitled sidebar'}</strong></div>
        {this.props.children}
      </div>
    );
  }
};

export default PluginSidebar;
