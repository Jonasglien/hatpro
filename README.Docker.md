# Docker Setup for HatPro

This document explains how to run the HatPro application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (usually comes with Docker Desktop)

## Quick Start

### Production Build

1. **Build and run the production container:**
   ```bash
   docker-compose up --build
   ```

2. **Or use npm scripts:**
   ```bash
   npm run docker:build
   npm run docker:run
   ```

3. **Access the application:**
   - Open your browser to `http://localhost:3000`

### Development Mode

1. **Run in development mode with hot-reloading:**
   ```bash
   npm run docker:dev
   ```

2. **Or manually:**
   ```bash
   docker-compose --profile dev up --build
   ```

3. **Access the development server:**
   - Open your browser to `http://localhost:5173`

## Docker Commands

### Build Only
```bash
# Build production image
docker build -t hatpro-webapp .

# Build development image
docker build -f Dockerfile.dev -t hatpro-dev .
```

### Run Containers
```bash
# Run production container
docker run -p 3000:3000 hatpro-webapp

# Run development container
docker run -p 5173:5173 -v $(pwd):/app hatpro-dev
```

### Docker Compose Commands
```bash
# Start production services
docker-compose up

# Start development services
docker-compose --profile dev up

# Build and start
docker-compose up --build

# Run in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f
```

## Container Details

### Production Container
- **Base Image:** `node:18-alpine`
- **Port:** 3000
- **Server:** `serve` (static file server)
- **Build:** Multi-stage build for optimized size
- **Security:** Runs as non-root user

### Development Container
- **Base Image:** `node:18-alpine`
- **Port:** 5173
- **Server:** Vite dev server
- **Features:** Hot-reloading, volume mounting

## Environment Variables

You can pass environment variables to the containers:

```bash
# Using docker run
docker run -p 3000:3000 -e NODE_ENV=production hatpro-webapp

# Using docker-compose
# Add to docker-compose.yml under environment section
```

## Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   # Change the port mapping
   docker run -p 3001:3000 hatpro-webapp
   ```

2. **Build fails:**
   ```bash
   # Clean Docker cache
   docker system prune -a
   
   # Rebuild without cache
   docker build --no-cache -t hatpro-webapp .
   ```

3. **Permission issues:**
   ```bash
   # The container runs as non-root user for security
   # If you encounter permission issues, check file ownership
   ```

### Logs and Debugging

```bash
# View container logs
docker logs hatpro-webapp

# Enter running container
docker exec -it hatpro-webapp sh

# View all containers
docker ps -a
```

## File Structure

```
├── Dockerfile              # Production build
├── Dockerfile.dev          # Development build
├── docker-compose.yml      # Multi-service configuration
├── .dockerignore           # Files to exclude from build
└── README.Docker.md        # This file
```

## Notes

- The production build serves static files and doesn't include Convex backend
- For full functionality with Convex, you'll need to deploy Convex separately
- The development container includes hot-reloading for faster development
- All builds use Node.js 18 Alpine for smaller image size
- Security best practices are implemented (non-root user, health checks)

## Next Steps

1. **Production Deployment:** Consider using container orchestration (Kubernetes, Docker Swarm)
2. **CI/CD:** Integrate Docker builds into your deployment pipeline
3. **Monitoring:** Add logging and monitoring solutions
4. **Scaling:** Use load balancers and multiple container instances 