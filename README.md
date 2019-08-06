# @alexbella/jupyterlab-custom-theme

Colorfull light theme for JupyterLab

## Screenshot
<img src="https://imgur.com/xidQu2n.png" alt="drawing" width="900"/>

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

Or try
```bash
npm install
jupyter labextension install .
```


To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```