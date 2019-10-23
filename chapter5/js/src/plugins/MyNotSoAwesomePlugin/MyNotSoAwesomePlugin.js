import Sidebar from "./components/Sidebar";
import { registerPlugin } from "../../utils/api";

/**
 * MyNotSoAwesomePlugin.
 */
class MyNotSoAwesomePlugin {

  /**
   * Registers the plugin.
   */
  constructor() {
    registerPlugin( "My-no-so-awesome-plugin", {
      render: Sidebar
    } );
  }
}

export default MyNotSoAwesomePlugin;
