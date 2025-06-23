# Build stage
FROM node:24-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for building)
RUN npm ci

# Copy source code
COPY . .

RUN rm -rf node_modules package-lock.json && npm install

# Build the application (frontend only for production)
RUN npm run build:frontend || npm run build

# Production stage
FROM node:24-alpine AS production

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies (serve is now included)
RUN npm ci

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Copy startup script
COPY start.sh ./
RUN chmod +x start.sh

# Debug: Check what's installed
RUN echo "=== DEBUG INFO ===" && \
    ls -la node_modules/.bin/ | head -10 && \
    echo "serve location:" && \
    find . -name "serve*" -type f && \
    echo "PATH: $PATH" && \
    echo "=================="

# Railway handles container security, so user creation not needed

# Expose port (Railway will override with $PORT)
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 