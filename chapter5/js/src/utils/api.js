/**
 * Contains the registered plugins.
 *
 * @type {Object} The registered plugins.
 */
const plugins = {};

/**
 * Registers a plugin to be used in the sidebar.
 *
 * @param {string} name     The name of the plugin.
 * @param {Object} settings The settings for the plugin.
 *
 * @returns {Object} The settings.
 */
export function registerPlugin( name, settings ) {

  // Skipping validation methods for the time being.
  plugins[ name ] = {
    name,
    icon: 'admin-plugins',
    ...settings,
  };

  return settings;
}

/**
 * Gets a specific plugin from the list of registered plugins.
 *
 * @param {string} name The name of the plugin to retrieve.
 *
 * @returns {Object} The plugin instance.
 */
export function getPlugin( name ) {
  return plugins[ name ];
}

/**
 * Gets all the registered plugin instances.
 *
 * @returns {Object[]} The plugin instances.
 */
export function getPlugins() {
  return Object.values( plugins );
}

