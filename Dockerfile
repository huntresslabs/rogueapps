# Use the official Node.js 24 image as the base image
FROM node:24-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the Next.js application
ENV NEXT_PUBLIC_ENVIRONMENT=production
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Copy the built static files from the builder stage
COPY --from=builder /app/out ./out

# Expose the port
EXPOSE 3000

# Since this is a static export, we'll use serve to serve the static files
RUN npm install -g serve

# Start the server
CMD ["serve", "-s", "out", "-l", "3000"]