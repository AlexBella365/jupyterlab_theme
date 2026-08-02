import { IThemeManager } from '@jupyterlab/apputils';

const plugin = {
  id: 'jupyterlab-custom-theme:plugin',
  description: 'Colourful light theme for JupyterLab with vivid Python linting',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app, manager) => {
    console.log('JupyterLab extension jupyterlab-custom-theme is activated!');

    const style = 'jupyterlab-custom-theme/index.css';
    manager.register({
      name: 'jupyterlab-custom-theme',
      displayName: 'Custom Theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined),
    });
  },
};

export default plugin;
