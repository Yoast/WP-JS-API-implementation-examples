import Sidebar from "./components/Sidebar";
import { registerPlugin } from "../../utils/api";

/**
 * MyAwesomePlugin.
 */
class MyAwesomePlugin {

  /**
   * Registers the plugin.
   */
  constructor() {
    registerPlugin( "My-awesome-plugin", {
      render: Sidebar
    } );
  }
}

export default MyAwesomePlugin;
