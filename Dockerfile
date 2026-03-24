FROM ghcr.io/getzola/zola:v0.19.2

WORKDIR /app
COPY . .

EXPOSE 8080
ENTRYPOINT ["zola", "serve", "--interface", "0.0.0.0", "--port", "8080"]