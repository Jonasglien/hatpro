# Use the Node alpine official image
# https://hub.docker.com/_/node
FROM node:lts-alpine AS build

# Set config
ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false

# Create and change to the app directory.
WORKDIR /app

# Copy the files to the container image
COPY package*.json ./

# Remove package-lock.json and install packages to fix rollup optional deps issue
RUN rm -f package-lock.json && npm install

COPY . . 

# Build the app.
RUN npm run build

# STAGE 2: Serve with Caddy

FROM caddy:alpine AS production

WORKDIR /app

COPY Caddyfile ./Caddyfile

# Use caddy fmt properly (optional though)

RUN caddy fmt Caddyfile --overwrite

# Copy files to the container image.
COPY --from=build /app/dist ./dist

EXPOSE 3000

# Use Caddy to run/serve the app
CMD ["caddy", "run", "--config", "Caddyfile", "--adapter", "caddyfile"]