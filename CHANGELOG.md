# Changelog

<!-- <START NEW CHANGELOG ENTRY> -->

## 2.3.0

- Rewrite the extension plugin in TypeScript and register it with the JupyterLab `ThemeManager`
- Restructure the styles into `variables.css`, `base.css` and `tokens.css`
- Switch syntax highlighting overrides to modern CodeMirror 6 tokens
- Adopt `@jupyter/builder` (Rspack) instead of the legacy `@jupyterlab/builder` webpack build
- Add linting (eslint, prettier, stylelint) and continuous integration/release workflows
- Add release tooling (CHANGELOG, `jupyter-releaser` config, RELEASE guide)

<!-- <END NEW CHANGELOG ENTRY> -->
