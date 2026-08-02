.PHONY: build build-prod clean dev install lint reload uninstall watch

# Build the extension for development
build:
	jlpm build

# Build the extension for production
build-prod:
	jlpm build:prod

# Clean all build artifacts
clean:
	jlpm clean:all

# Install in editable (development) mode
dev:
	pip install -e .
	jupyter-builder develop . --overwrite

# Install production package
install:
	pip install .

# Reload the extension (rebuild + link)
reload: build
	jupyter-builder develop . --overwrite

# Run all linters
lint:
	jlpm lint

# Uninstall the extension
uninstall:
	pip uninstall jupyterlab-custom-theme -y

# Watch for changes and rebuild automatically
watch:
	jupyter labextension watch .
