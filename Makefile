.PHONY: build serve clean

build:
	zola build

serve:
	zola serve --port 1111

clean:
	rm -rf public/
