.PHONY: build serve clean

build:
	zola build
	python3 tools/toml_to_json.py

serve:
	zola serve --port 8080

clean:
	rm -rf public/
