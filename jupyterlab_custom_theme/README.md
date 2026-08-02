# jupyterlab-custom-theme

Colourful light theme for JupyterLab with vivid Python syntax highlighting.

## Features

- Light theme with custom colour palette (petrol blue, neon, accent)
- Vivid Python syntax highlighting (CodeMirror-based)
- Colourful Markdown output styling (centred h1, coloured borders on h2–h4)
- Autoscroll outputs with max-height constraint
- Centred plot rendering (Matplotlib, etc.)

## Prerequisites

- JupyterLab >= 4.5.0

## Activate the theme

After installing, select **Custom Theme** from _Settings → Themes → JupyterLab Theme_.

## Install

### Via pip (recommended)

```bash
pip install jupyterlab-custom-theme
```

### Via npm

```bash
npm install jupyterlab-custom-theme
```

## Development

```bash
# Install dependencies
jlpm install

# Build the extension
jlpm build

# Link for development
jupyter labextension develop . --overwrite

# Watch for changes
jupyter labextension watch .
```

## Uninstall

```bash
pip uninstall jupyterlab-custom-theme
```

## License

BSD 3-Clause License
