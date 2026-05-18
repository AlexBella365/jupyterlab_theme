const plugin = {
  id: 'jupyterlab-custom-theme:plugin',
  description: 'Colourful light theme for JupyterLab with vivid Python linting',
  autoStart: true,
  activate: (app) => {
    console.log('JupyterLab extension jupyterlab-custom-theme is activated!');
  }
};

export default plugin;
