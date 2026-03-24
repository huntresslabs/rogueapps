# Build stage
FROM ghcr.io/getzola/zola:v0.19.2 AS builder

WORKDIR /app
COPY . .

RUN zola build

# Serve stage
FROM nginx:alpine

COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 80

# Set the environment variable in the .env.local file
RUN echo "NEXT_PUBLIC_ENVIRONMENT=development" > .env.local

# Start the Next.js application
CMD ["npm", "run", "dev"]