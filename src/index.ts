import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';

/**
 * A plugin for jupyterlab-custom-theme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-custom-theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    manager.register({
      name: 'Colourful light theme by AB',
      isLight: true,
      load: function() {
        let meta: HTMLMetaElement = document.createElement("meta");
        meta.name = "theme-color";
        meta.id = "theme-color-AB"
        meta.content = "#1C1E26";
        document.getElementsByTagName("head")[0].appendChild(meta);
        return manager.loadCSS('jupyterlab-custom-theme/index.css');
      },
      unload: function() {
        let meta: HTMLElement = document.getElementById("theme-color-AB");
        meta.parentNode.removeChild(meta);
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};

export default plugin;
