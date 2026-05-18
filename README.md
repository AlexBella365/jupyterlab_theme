# jupyterlab-custom-theme

Colourful light theme for JupyterLab with vivid Python linting.
Updated to support JupyterLab 4.x.

*Note: This is a personal project and no support is guaranteed*

## Screenshot

![screenshot](imgs/screenshot.png)

## Prerequisites

* JupyterLab >= 4.5.0

## Install

```bash
pip install jupyterlab-custom-theme
```

## Development

For a development installation:

```bash
# Clone the repository
git clone https://github.com/AlexBella365/jupyterlab_theme.git
cd jupyterlab_theme

# Install in editable mode
pip install -e .

# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite

# Rebuild extension after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jupyter labextension watch .

# Run JupyterLab in another terminal
jupyter lab
```

## Uninstall

```bash
pip uninstall jupyterlab-custom-theme
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
