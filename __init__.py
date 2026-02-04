"""
jupyterlab_custom_theme
Colourful light theme for JupyterLab with vivid Python linting
"""

import json
from pathlib import Path

__all__ = ["__version__"]

def _get_version():
    """Get version from package.json"""
    here = Path(__file__).parent.parent
    package_json = here / "package.json"
    
    if package_json.exists():
        with open(package_json) as f:
            data = json.load(f)
            return data.get("version", "unknown")
    return "unknown"

__version__ = _get_version()

def _jupyter_labextension_paths():
    return [{
        "src": "labextension",
        "dest": "jupyterlab-custom-theme"
    }]