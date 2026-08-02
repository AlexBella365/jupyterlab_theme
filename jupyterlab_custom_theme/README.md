# jupyterlab-custom-theme

Colourful light theme for JupyterLab with vivid Python syntax highlighting.

## Features

- Light theme with custom colour palette (petrol blue, neon, accent)
- Vivid Python syntax highlighting (CodeMirror 6)
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
jupyter-builder develop . --overwrite

# Watch for changes
jupyter-builder watch .
```

## Project layout

The extension is a TypeScript plugin (in `src/`) that registers the theme with
JupyterLab's `ThemeManager`. The styles are split into:

- `style/variables.css` – the colour palette and JupyterLab design tokens
- `style/base.css` – typography, Markdown output, autoscroll and plot styling
- `style/tokens.css` – CodeMirror 6 syntax highlighting tokens

The Python package builds the lab extension with `@jupyter/builder`, and release
workflows are provided via `jupyter-releaser`.

## Uninstall

```bash
pip uninstall jupyterlab-custom-theme
```

## License

BSD 3-Clause License
