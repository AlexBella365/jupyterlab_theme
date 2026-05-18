# Simplification Analysis: Keeping Only Core Modifications

This document analyses the repo and proposes ways to simplify it so that only the **core theme customisations** are front and centre, with minimal boilerplate.

---

## 1. What Is “Core” Today?

The actual customisations are:

| What | Role |
|------|------|
| **`style/custom.css`** | All of it. Your colours (e.g. `--ab-*`), markdown headers, CodeMirror syntax, output/plot rules. |
| **`style/index.css`** | Entry: imports variables + custom, plus a few lines for `tt, code, kbd, samp, pre`. Could be merged into one file. |
| **`style/variables.css`** | JupyterLab’s public theme API (~340 lines). Only **one** value is overridden in `custom.css`: `--jp-layout-color1`. The rest is reference. |

Everything else is there to make this installable as a JupyterLab extension (plugin entry point, build, packaging).

---

## 2. What Can Be Simplified

### A. Remove TypeScript → use a single JS plugin file

**Current:** `src/index.ts` is compiled to `lib/index.js`. The plugin only logs on activate; it exists so JupyterLab has an extension entry point. The theme is applied via `themePath` in `package.json`.

**Change:** Drop TypeScript. Add a single **checked-in** `lib/index.js` that exports a minimal plugin (same behaviour as now). Delete `src/index.ts`, `tsconfig.json`, and all TypeScript/type-related devDependencies (`typescript`, `@types/node`, `@typescript-eslint/*`).

**Result:** No `tsc` step. Build is only: `jupyter labextension build .` (plus `jlpm install` once). Fewer dependencies and scripts.

---

### B. Trim dev tooling (optional)

**Current:** ESLint, Prettier, stylelint, npm-run-all, rimraf, many scripts (lint, clean:all, watch, etc.).

**Change:** Keep only what you need to **build and install**:

- **Scripts:** `build` (= `jupyter labextension build .`), `install:extension` (= `build`), and optionally one `clean` for `labextension` + `lib` if you still generate something there.
- **DevDependencies:** Only `@jupyterlab/builder` (and what it pulls in). You can remove: eslint, prettier, stylelint, npm-run-all, rimraf, @types/*, typescript, @typescript-eslint/*.

**Result:** Smaller `package.json`, fewer moving parts, no lint/format step unless you add it back later.

---

### C. Consolidate CSS (optional)

**Current:** `style/index.css` imports `variables.css` and `custom.css` and adds a small typography block.

**Change:** Merge the typography block from `index.css` into `custom.css`, and make `index.css` only:

```css
@import './variables.css';
@import './custom.css';
```

Or use a single `index.css` that contains both the variables import and the full content of `custom.css` + the typography lines. Then you have one “custom” file to edit and one entry point.

**Result:** Clearer structure: “variables (reference) + one place for my overrides”.

---

### D. Keep `variables.css` as reference (recommended)

**Current:** `style/variables.css` is a long copy of JupyterLab’s theme variables. Only `--jp-layout-color1` is overridden in `custom.css`.

**Options:**

- **Keep as-is:** Easiest. Theme stays self-contained and works offline. No dependency on JupyterLab’s built-in theme CSS at build time.
- **Shrink later:** You could try keeping only the variables you actually use in `custom.css` (and the ones they depend on). That’s a larger refactor and can break if JupyterLab adds or renames variables.

**Recommendation:** Keep the full `variables.css` unless you want to maintain a minimal variable set.

---

### E. Python packaging

**Current:** Hatch + hatch-nodejs-version + hatch-jupyter-builder build the labextension from the repo.

**Change:** No need to simplify this if you want to keep `pip install .` / editable install. If you ever want to “only ship the built theme”, you could publish a second package that contains only `jupyterlab_custom_theme/labextension` (prebuilt) and a minimal `pyproject.toml` with no build hook—then the “source” repo is for development only. For most users, keeping the current Python build is fine.

---

### F. Small fix in core CSS

In `style/custom.css`, `.cm-s-jupyter span.cm-error` uses `var(--ab-error)`, but `--ab-error` is not defined in `:root`. Either define it in the `:root` block (e.g. `--ab-error: hsl(0, 100%, 50%);`) or use something like `var(--jp-error-color1)` so the theme stays consistent.

---

## 3. Recommended “minimal core” layout

After simplification, the repo could look like this (conceptually):

```
jupyterlab_theme/
├── package.json          # Minimal: name, version, jupyterlab.themePath, main → lib/index.js, deps: @jupyterlab/application, @jupyterlab/apputils; dev: @jupyterlab/builder
├── lib/
│   └── index.js          # Single minimal plugin (checked in, no TypeScript)
├── style/
│   ├── index.css         # Entry: @import variables + custom (+ optional typography)
│   ├── index.js          # Import CSS (unchanged)
│   ├── variables.css     # JupyterLab variable reference (unchanged)
│   └── custom.css        # All your theme customisations
├── jupyterlab_custom_theme/
│   ├── __init__.py
│   └── labextension/     # Generated by jupyter labextension build
├── pyproject.toml
├── install.json
├── README.md
└── (optional) MANIFEST.in, .gitignore
```

**Removed:** `src/`, `tsconfig.json`, `.eslintrc.js`, and all ESLint/Prettier/stylelint/TypeScript/rimraf/npm-run-all config and deps. Scripts reduced to e.g. `build` and `install:extension`.

---

## 4. Summary table

| Area | Current | Simplified |
|------|--------|------------|
| Plugin | TypeScript → compiled `lib/index.js` | Single checked-in `lib/index.js` (no TS) |
| Build | `tsc` + `jupyter labextension build` | `jupyter labextension build` only |
| Lint/format | ESLint, Prettier, stylelint | Optional or removed |
| Scripts | Many (build, clean, lint, watch, …) | `build`, `install:extension` (and optional `clean`) |
| DevDependencies | 15+ | 1–2 (@jupyterlab/builder + maybe rimraf) |
| CSS | index + variables + custom | Same; optional merge of index + custom content |

The **core modifications** stay in `style/custom.css` (and optionally the small bit in `style/index.css`). The rest of the changes are about dropping TypeScript and non-essential tooling so the project is easier to maintain and only the theme files feel “core”.
