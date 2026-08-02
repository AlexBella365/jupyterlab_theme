import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-custom-theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-custom-theme:plugin',
  description: 'Colourful light theme for JupyterLab with vivid Python linting',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    const style = 'jupyterlab-custom-theme/index.css';

    manager.register({
      name: 'jupyterlab-custom-theme',
      displayName: 'Custom Theme',
      isLight: true,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
