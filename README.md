# @alexbella/jupyterlab-custom-theme

Custom theme for JupyterLab

<!--
## Screenshot
<img src="" alt="drawing" width="900"/>
-->

## Prerequisites

* JupyterLab >=1.0

## Installation

```bash
jupyter labextension install @alexbella/jupyterlab-custom-theme
```

## Development

For a development install, do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```