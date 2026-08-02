"""
jupyterlab_custom_theme
Colourful light theme for JupyterLab with vivid Python syntax highlighting
"""

from ._version import __version__  # noqa: F401

def _jupyter_labextension_paths():
    return [{
        "src": "labextension",
        "dest": "jupyterlab-custom-theme"
    }]
