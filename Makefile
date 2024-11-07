.PHONY: dev

dev:
	@echo "running development server..." && \
	python -m http.server 8080 --directory .

publish:
	@echo "Attempting to publish site..." && surge . syntactic-semantics.surge.sh

