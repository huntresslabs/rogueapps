# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files first for caching layer purposes
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Set the environment variable in the .env.local file
RUN echo "NEXT_PUBLIC_ENVIRONMENT=development" > .env.local

# Start the Next.js application
CMD ["npm", "run", "dev"]