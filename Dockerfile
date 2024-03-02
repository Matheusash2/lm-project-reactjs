###################
# BUILD FOR LOCAL DEVELOPMENT
###################

# Use node image as base image for development stage
FROM node:20-alpine AS development

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to container image
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all files to container image
COPY . .

###################
# BUILD FOR PRODUCTION
###################

# Use node image as base image for build stage
FROM node:20-alpine AS build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to container image
COPY package*.json ./

# Install app dependencies
RUN npm ci --only=production

# Copy all files to container image
COPY . .

# Build the production application
RUN npm run build

###################
# PRODUCTION
###################

# Use node image as base image for production stage
FROM node:20-alpine AS production

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to container image
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Expose port (if necessary)
# EXPOSE <PORT_NUMBER>

# Command to run the application
CMD ["npm", "run", "preview"]
