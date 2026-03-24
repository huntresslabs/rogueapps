.PHONY: build serve clean

build:
	zola build

serve:
	zola serve --port 8080

clean:
	rm -rf public/
