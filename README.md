# @alexbella/jupyterlab-custom-theme

Colourful light theme for JupyterLab

## Screenshot
![screenshot](./imgs/screenshot.png)

## Prerequisites

* JupyterLab >=1.0

## Installation

```bash
jupyter labextension install @alexbella/jupyterlab-custom-theme
```

## Development


To build the package and the JupyterLab app:

```bash
jlpm install
jlpm run build
jupyter labextension install .
jupyter lab build
```