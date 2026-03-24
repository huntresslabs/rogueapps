FROM ghcr.io/getzola/zola:v0.22.1

WORKDIR /app
COPY . .

EXPOSE 8080
ENTRYPOINT ["zola", "serve", "--interface", "0.0.0.0", "--port", "8080", "--base-url", "http://127.0.0.1"]