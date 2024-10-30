.PHONY: build dev

build:
	@echo "Building site..." && ./scripts/build.sh

dev: build
	@echo "running development server..." && \
	python -m http.server 8080 --directory ./build

publish: build
	@echo "Attempting to publish site..." && ./scripts/publish.sh

