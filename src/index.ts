import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-custom-theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-custom-theme:plugin',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab-custom-theme is activated!');
    const style = 'jupyterlab-custom-theme/index.css';

    manager.register({
      name: 'Colourful light theme by AB',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
