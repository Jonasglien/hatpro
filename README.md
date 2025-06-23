# HatPro - Hat Profile Optimization

A modern web application for optimizing steel usage and reducing CO2 footprint in hat profile manufacturing.

## Prerequisites

This project runs in Docker containers. You need to install Docker on your system first.

## Step 1: Install Docker

### For macOS

1. **Download Docker Desktop for Mac:**
   - Visit [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
   - Click "Download for Mac"
   - Choose the appropriate version for your Mac (Intel or Apple Silicon)

2. **Install Docker Desktop:**
   - Open the downloaded `.dmg` file
   - Drag Docker to your Applications folder
   - Launch Docker from Applications
   - Follow the setup wizard and sign in (or create a Docker account)

3. **Verify installation:**
   ```bash
   docker --version
   docker-compose --version
   ```

### For Windows

1. **Download Docker Desktop for Windows:**
   - Visit [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
   - Click "Download for Windows"

2. **Install Docker Desktop:**
   - Run the downloaded installer
   - Follow the installation wizard
   - **Important:** Enable WSL 2 features when prompted
   - Restart your computer when installation completes

3. **Launch Docker Desktop:**
   - Start Docker Desktop from the Start menu
   - Complete the setup and sign in (or create a Docker account)

4. **Verify installation:**
   ```bash
   docker --version
   docker-compose --version
   ```

## Step 2: Download This Project

Clone or download this repository to your local machine:

```bash
git clone <repository-url>
cd hatpro
```

Or download as ZIP and extract to a folder.

## Step 3: Build and Run the Application

### Option A: Quick Start (Recommended)

1. **Open terminal/command prompt in the project folder**

2. **Build and run the application:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   - Open your web browser
   - Go to `http://localhost:3000`
   - You should see the HatPro application running

### Option B: Using NPM Scripts

1. **Build the Docker image:**
   ```bash
   npm run docker:build
   ```

2. **Run the container:**
   ```bash
   npm run docker:run
   ```

3. **Access the application:**
   - Open your web browser
   - Go to `http://localhost:3000`

## Step 4: Using the Application

- **Home Page:** Overview of Hat Profile Optimization
- **Optimizer:** Enter steel parameters (bu, bo, H, tu, to, tw) for optimization
- **Sign In:** Access authentication features (requires Convex backend setup)

## Stopping the Application

To stop the running containers:

```bash
# Press Ctrl+C in the terminal where docker-compose is running
# Or in a new terminal:
docker-compose down
```

## Development Mode (Optional)

For development with hot-reloading:

```bash
npm run docker:dev
```

Access at `http://localhost:5173`

## Troubleshooting

### Docker Issues

1. **"Docker daemon not running":**
   - Make sure Docker Desktop is started and running
   - Look for the Docker whale icon in your system tray (Windows) or menu bar (Mac)

2. **Port already in use:**
   ```bash
   # Use a different port
   docker run -p 3001:3000 hatpro-webapp
   ```

3. **Build fails:**
   ```bash
   # Clean Docker cache and rebuild
   docker system prune -a
   docker-compose up --build --no-cache
   ```

### General Issues

1. **Command not found:**
   - Make sure you're in the correct project directory
   - Verify Docker is properly installed

2. **Permission errors:**
   - On Windows: Run terminal as Administrator
   - On Mac/Linux: Check Docker Desktop permissions

## Support

If you encounter any issues:

1. Check that Docker Desktop is running
2. Verify you're in the correct project directory
3. Try rebuilding with `docker-compose up --build`
4. Check the troubleshooting section above

---

**That's it!** Your HatPro application should now be running in Docker at `http://localhost:3000` 🎉
